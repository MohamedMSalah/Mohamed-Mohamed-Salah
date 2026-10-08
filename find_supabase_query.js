const fs = require('fs');
const code = fs.readFileSync('old_index.js', 'utf8');

const idx = code.indexOf('.from(`projects`)');
if (idx !== -1) {
  console.log(code.substring(idx - 400, idx + 400));
}
