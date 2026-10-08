const fs = require('fs');
const code = fs.readFileSync('old_index.js', 'utf8');

console.log('--- BOTTOM OF OLD_INDEX.JS ---');
console.log(code.substring(code.length - 4000));
