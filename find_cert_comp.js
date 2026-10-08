const fs = require('fs');
const code = fs.readFileSync('old_routes-BH3LjOmq.js', 'utf8');

const idx = code.indexOf('function Ne(');
if (idx !== -1) {
  console.log(code.substring(idx, idx + 1000));
}
