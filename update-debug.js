const fs = require('fs');
const path = require('path');

const debugFilePath = path.join(__dirname, 'domi/debug.txt');

// Dados novos para substituir o conteúdo atual
const newData = "Novos dados para substituir o conteúdo do arquivo debug.txt\n";

// Substitui o conteúdo atual do arquivo debug.txt
fs.writeFile(debugFilePath, newData, (err) => {
  if (err) {
    console.error('Erro ao atualizar o arquivo debug.txt:', err);
    process.exit(1);
  }
  console.log('Arquivo debug.txt atualizado com sucesso!');
});
