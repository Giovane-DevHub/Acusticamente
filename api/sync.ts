import { MongoClient } from 'mongodb';

let cachedClient: MongoClient | null = null;

async function getDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return null;
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }

  return cachedClient.db('acusticamente_db');
}

export default async function handler(req: any, res: any) {
  // Configuração CORS para permitir requisições seguras
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const db = await getDatabase();
    if (!db) {
      return res.status(200).json({
        success: false,
        source: 'local_fallback',
        message: 'Variável MONGODB_URI não encontrada. Operando localmente.'
      });
    }

    // 1. GET: Retorna todos os dados atualizados da nuvem
    if (req.method === 'GET') {
      const students = await db.collection('students').find({}, { projection: { _id: 0 } }).toArray();
      const payments = await db.collection('payments').find({}, { projection: { _id: 0 } }).toArray();
      const appointments = await db.collection('appointments').find({}, { projection: { _id: 0 } }).toArray();
      const plans = await db.collection('plans').find({}, { projection: { _id: 0 } }).toArray();
      const users = await db.collection('users').find({}, { projection: { _id: 0 } }).toArray();
      const audit = await db.collection('auditorias').find({}, { projection: { _id: 0 } }).toArray();
      const settingsDoc = await db.collection('settings').findOne({ id: 'system_settings' }, { projection: { _id: 0 } });

      return res.status(200).json({
        success: true,
        source: 'mongodb',
        data: {
          students,
          payments,
          appointments,
          plans,
          users,
          audit,
          settings: settingsDoc || null
        }
      });
    }

    // 2. POST: Salva ou remove alterações de alunos, pagamentos, auditoria, etc.
    if (req.method === 'POST') {
      const { collection, action, data } = req.body || {};

      // Ação: Zerar auditoria
      if (action === 'clear_audit' || ((collection === 'auditorias' || collection === 'audit') && action === 'clear')) {
        await db.collection('auditorias').deleteMany({});
        await db.collection('audit').deleteMany({});
        return res.status(200).json({ success: true, message: 'Auditoria zerada com sucesso no MongoDB.' });
      }

      // Ação: Zerar cadastros para entrega limpa do sistema
      if (action === 'reset_clean') {
        await db.collection('students').deleteMany({});
        await db.collection('payments').deleteMany({});
        await db.collection('appointments').deleteMany({});
        await db.collection('plans').deleteMany({});
        await db.collection('auditorias').deleteMany({});
        await db.collection('audit').deleteMany({});
        return res.status(200).json({ success: true, message: 'Base de dados e auditorias zerados com sucesso para entrega.' });
      }

      if (!collection) {
        return res.status(400).json({ success: false, message: 'Coleção não informada.' });
      }

      const col = db.collection(collection);

      // Ação: Inserir ou atualizar um registro (Upsert)
      if (action === 'upsert' && data?.id) {
        await col.replaceOne({ id: data.id }, data, { upsert: true });
        return res.status(200).json({ success: true, message: 'Salvo no MongoDB com sucesso.' });
      }

      // Ação: Excluir um registro
      if (action === 'delete' && data?.id) {
        await col.deleteOne({ id: data.id });
        return res.status(200).json({ success: true, message: 'Removido do MongoDB.' });
      }

      // Ação: Salvar configurações
      if (collection === 'settings' && data) {
        await col.replaceOne({ id: 'system_settings' }, { id: 'system_settings', ...data }, { upsert: true });
        return res.status(200).json({ success: true, message: 'Configurações salvas no MongoDB.' });
      }

      // Ação: Substituir lote completo
      if (action === 'replace_all' && Array.isArray(data)) {
        await col.deleteMany({});
        if (data.length > 0) {
          await col.insertMany(data);
        }
        return res.status(200).json({ success: true, message: 'Lote atualizado com sucesso.' });
      }

      return res.status(400).json({ success: false, message: 'Ação não reconhecida.' });
    }

    return res.status(405).json({ success: false, message: 'Método não permitido.' });
  } catch (error: any) {
    console.error('Erro na API Serverless MongoDB:', error);
    return res.status(500).json({ success: false, error: error.message || 'Erro no servidor MongoDB.' });
  }
}
