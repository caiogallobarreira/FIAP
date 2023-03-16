const fs = require('fs');
const path = require('path');

const directoryPath = './'; // Diretório onde os arquivos estão localizados

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Erro ao ler o diretório: ' + err);
  }

  files.forEach(function (file) {
    const filePath = path.join(directoryPath, file);
    const fileExtension = path.extname(filePath);

    // Verifica se o arquivo é um arquivo .js e não é o próprio arquivo
    if (fileExtension === '.js' && file !== 'jsTotxt.js') {
      const newFilePath = path.join(`${directoryPath}/ExerciciosTeams/`, `${path.parse(filePath).name}.txt`);

      // Lê o conteúdo do arquivo original
      fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
          return console.log(`Erro ao ler o arquivo ${file}: ` + err);
        }

        // Escreve o conteúdo do arquivo em um novo arquivo com a extensão .txt
        fs.writeFile(newFilePath, data, function (err) {
          if (err) {
            return console.log(`Erro ao criar o arquivo ${newFilePath}: ` + err);
          }

          console.log(`Arquivo ${file} transformado em ${path.parse(filePath).name}.txt`);
        });
      });
    }
  });
});