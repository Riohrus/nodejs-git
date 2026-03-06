const fs = require('fs');

const data = fs.readFileSync('example.txt', 'utf-8');

console.log('Contenido del archivo:', data);