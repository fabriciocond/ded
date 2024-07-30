const fs = require('fs');
const path = require('path');

// Certifique-se de que o caminho está correto
const debugFilePath = path.join(__dirname, 'domi/debug.txt');

// Lógica para atualizar o arquivo debug.txt
const newData = "Novos dados para adicionar ao arquivo debug.txt\n";

fs.appendFile(debugFilePath, newData, (err) => {
  if (err) {
    console.error('Erro ao atualizar o arquivo debug.txt:', err);
    process.exit(1); // Encerra com erro
  } else {
    console.log('Arquivo debug.txt atualizado com sucesso!');
  }
});
