const fs = require('fs');
const code = fs.readFileSync('old_index.js', 'utf8');

console.log('--- OLD_INDEX.JS PREVIEW ---');
console.log(code.substring(0, 3000));
