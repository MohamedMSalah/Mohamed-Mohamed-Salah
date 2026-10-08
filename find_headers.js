const fs = require('fs');

const code = fs.readFileSync('old_dist-DKxRsHch.js', 'utf8');

const idx = code.indexOf('_serverFnId');
if (idx !== -1) {
  console.log(code.substring(idx - 300, idx + 400));
}
