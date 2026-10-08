const fs = require('fs');
const code = fs.readFileSync('old_index.js', 'utf8');

const idx = code.indexOf('1feafe9ee507669f90052f304aabb3fcc03cd622822c61a01e351cbc5f3c503b');
if (idx !== -1) {
  console.log(code.substring(idx - 600, idx + 200));
}
