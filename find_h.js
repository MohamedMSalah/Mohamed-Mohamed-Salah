const fs = require('fs');

const code = fs.readFileSync('old_index.js', 'utf8');

// Find where h is declared (e.g. var h= or function h() or from import)
const idx = code.indexOf('function h(');
const idx2 = code.indexOf('var h=');
console.log('function h:', idx, 'var h:', idx2);

// Look at imports in old_index.js
console.log(code.substring(0, 1000));
