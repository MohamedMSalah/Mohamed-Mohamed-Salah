const fs = require('fs');
const code = fs.readFileSync('old_routes-BH3LjOmq.js', 'utf8');

console.log(code.substring(0, 2000));
