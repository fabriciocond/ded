const fs = require('fs');
const path = require('path');

const debugFilePath = path.join(__dirname, 'domi/debug.txt');

// Lógica para atualizar o arquivo debug.txt
// Aqui você pode adicionar seu código para ler e modificar o arquivo debug.txt
const newData = "Novos dados para adicionar ao arquivo debug.txt\n";

fs.appendFile(debugFilePath, newData, (err) => {
  if (err) throw err;
  console.log('Arquivo debug.txt atualizado com sucesso!');
});
