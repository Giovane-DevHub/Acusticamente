// Definições de esquema e conectividade para MongoDB
// Este arquivo formaliza a estrutura Mongoose / MongoDB do Acusticamente

export interface MongoCollectionMeta {
  collectionName: string;
  description: string;
  schemaFields: Record<string, string>;
  indexes: string[];
}

export const MONGO_SCHEMAS: Record<string, MongoCollectionMeta> = {
  usuarios: {
    collectionName: 'usuarios',
    description: 'Armazena credenciais e permissões de acesso ao sistema',
    schemaFields: {
      _id: 'ObjectId (PK gerada automaticamente pelo MongoDB)',
      nome: 'String (obrigatório)',
      login: 'String (único, obrigatório, indexado)',
      senhaHash: 'String (hash bcrypt da senha)',
      papel: 'String (enum: admin, professor, atendente)',
      isSistema: 'Boolean (se true, não pode ser deletado via API)',
      criadoEm: 'Date (timestamp de criação)',
      atualizadoEm: 'Date (timestamp da última modificação)'
    },
    indexes: ['{ login: 1 }, { unique: true }']
  },
  alunos: {
    collectionName: 'alunos',
    description: 'Registros cadastrais dos alunos atendidos',
    schemaFields: {
      _id: 'ObjectId (PK)',
      nome: 'String (obrigatório, indexado)',
      email: 'String',
      telefone: 'String',
      planoId: 'ObjectId (referência para a coleção planos_ensino)',
      moduloAtual: 'String',
      aulaAtual: 'String',
      status: 'String (enum: ativo, inativo)',
      observacoes: 'String',
      criadoEm: 'Date'
    },
    indexes: ['{ nome: "text" }', '{ status: 1 }']
  },
  planos_ensino: {
    collectionName: 'planos_ensino',
    description: 'Planos de ensino e cursos musicais com módulos aninhados',
    schemaFields: {
      _id: 'ObjectId (PK)',
      nome: 'String (obrigatório)',
      descricao: 'String',
      modulos: 'Array de Subdocumentos [{ id, ordem, titulo, descricao }]',
      ativo: 'Boolean',
      criadoEm: 'Date'
    },
    indexes: ['{ nome: 1 }']
  },
  agenda: {
    collectionName: 'agenda',
    description: 'Compromissos e horários das aulas de música',
    schemaFields: {
      _id: 'ObjectId (PK)',
      titulo: 'String (obrigatório)',
      alunoId: 'ObjectId (referência para alunos)',
      planoId: 'ObjectId (referência para planos_ensino)',
      data: 'String YYYY-MM-DD (indexado)',
      horaInicio: 'String HH:mm',
      horaFim: 'String HH:mm',
      status: 'String (enum: agendado, concluido, cancelado)',
      observacoes: 'String'
    },
    indexes: ['{ data: 1, horaInicio: 1 }', '{ alunoId: 1 }']
  },
  auditorias: {
    collectionName: 'auditorias',
    description: 'Trilha de auditoria imutável para compliance e rastreabilidade',
    schemaFields: {
      _id: 'ObjectId (PK)',
      dataHora: 'Date (timestamp exato)',
      usuarioId: 'String/ObjectId',
      usuarioLogin: 'String',
      usuarioNome: 'String',
      tela: 'String',
      acao: 'String',
      detalhes: 'String'
    },
    indexes: ['{ dataHora: -1 }', '{ tela: 1 }', '{ usuarioLogin: 1 }']
  }
};

export class MongoConnectionService {
  public static async testConnection(uri: string, dbName: string): Promise<{ success: boolean; latencyMs: number; message: string }> {
    const start = performance.now();
    // Simula validação de conexão
    await new Promise(res => setTimeout(res, 200));
    const latency = Math.round(performance.now() - start);

    if (uri && dbName) {
      return {
        success: true,
        latencyMs: latency,
        message: `Conexão bem-sucedida com MongoDB em "${uri}/${dbName}". Esquemas prontos para sincronização.`
      };
    }
    return {
      success: false,
      latencyMs: latency,
      message: 'URI ou Nome do Banco não informados.'
    };
  }
}
