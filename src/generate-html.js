const fs = require('fs');

module.exports = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
          if (err) {
            reject(err);
            return;
          }
    
          resolve({
            ok: true,
            message: 'Tean page  was successfully created!'
          });
        });
      });
}