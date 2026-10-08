const fs = require('fs');

const code = fs.readFileSync('old_QueryClientProvider.js', 'utf8');

const idx = code.indexOf('function ci(');
const idx2 = code.indexOf('var ci=');
console.log('function ci:', idx, 'var ci:', idx2);

if (idx !== -1) {
  console.log(code.substring(idx - 100, idx + 500));
}
if (idx2 !== -1) {
  console.log(code.substring(idx2 - 100, idx2 + 500));
}
