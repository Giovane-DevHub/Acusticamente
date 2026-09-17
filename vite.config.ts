import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,  // Porta que vai rodar (http://localhost:3000)
    open: false, // Não abre o navegador automaticamente
    host: true   // Libera acesso a internet
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          pdf: ['jspdf', 'jspdf-autotable']
        }
      }
    }
  }
});

//Vite.config.ts é responsável por:
//Rodar o servidor de desenvolvimento com atualização em tempo real;
//Compilar o código TypeScript, CSS e HTML.