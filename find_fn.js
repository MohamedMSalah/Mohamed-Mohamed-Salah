const fs = require('fs');

const code = fs.readFileSync('old_index.js', 'utf8');

const matches = code.match(/[a-zA-Z0-9_\$]+\.serverFn[a-zA-Z0-9_\$]*/g) || [];
console.log('Matches:', matches);

const fetchMatches = code.match(/headers:[^}]+\}/g) || [];
console.log('Headers in index.js:', fetchMatches);
