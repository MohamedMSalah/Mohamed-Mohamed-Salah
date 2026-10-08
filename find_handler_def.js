const fs = require('fs');

const code = fs.readFileSync('old_index.js', 'utf8');

const idx = code.indexOf('.handler(h(');
if (idx !== -1) {
  console.log('Snippet around .handler(h(');
  console.log(code.substring(idx - 400, idx + 400));
}
