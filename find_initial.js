const fs = require('fs');
const code = fs.readFileSync('old_routes-BH3LjOmq.js', 'utf8');

const idx = code.indexOf('ne=');
const idx2 = code.indexOf('te=');
const idx3 = code.indexOf('experiences:');

console.log('--- SNIPPET AROUND ne and te ---');
if (idx !== -1) console.log(code.substring(idx - 200, idx + 400));
if (idx3 !== -1) console.log(code.substring(idx3 - 200, idx3 + 400));
