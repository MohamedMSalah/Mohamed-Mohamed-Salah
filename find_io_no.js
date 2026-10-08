const fs = require('fs');
const code = fs.readFileSync('old_index.js', 'utf8');

const idx1 = code.indexOf('var io=');
const idx2 = code.indexOf('var no=');
const idx3 = code.indexOf('function io(');
const idx4 = code.indexOf('function no(');

console.log('io snippet:', code.substring(Math.max(0, idx1 !== -1 ? idx1 : idx3) - 100, Math.max(0, idx1 !== -1 ? idx1 : idx3) + 600));
console.log('no snippet:', code.substring(Math.max(0, idx2 !== -1 ? idx2 : idx4) - 100, Math.max(0, idx2 !== -1 ? idx2 : idx4) + 600));
