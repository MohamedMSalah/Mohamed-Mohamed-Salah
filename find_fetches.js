const fs = require('fs');
const code = fs.readFileSync('old_routes-BH3LjOmq.js', 'utf8');

// Find how projects or site data are fetched
const queryKeys = code.match(/function\s+[a-zA-Z0-9_]+\s*\([^)]*\)\s*\{[^}]*fetch\([^}]*\)\}/g) || [];
console.log('Fetch functions:', queryKeys);

// Find all fetch calls in code
const fetchCalls = code.match(/fetch\([^)]+\)/g) || [];
console.log('All fetch calls in routes:', fetchCalls);
