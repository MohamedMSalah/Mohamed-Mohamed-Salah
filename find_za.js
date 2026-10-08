const fs = require('fs');
const code = fs.readFileSync('old_index.js', 'utf8');

const idx = code.indexOf('Za=');
if (idx !== -1) {
  console.log(code.substring(idx - 200, idx + 400));
}
