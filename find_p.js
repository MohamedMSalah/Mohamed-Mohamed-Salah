const fs = require('fs');

const code = fs.readFileSync('old_QueryClientProvider.js', 'utf8');

const matches = code.match(/export\s*\{[^}]+\}/g) || [];
console.log('Exports from QueryClientProvider:', matches);

// Find export of P
const idx = code.lastIndexOf('P as');
if (idx !== -1) {
  console.log(code.substring(idx - 100, idx + 100));
}

// Find function P definition
const pMatches = code.match(/function [A-Z]\([^)]*\)\{[^}]*fetch[^}]*\}/g) || [];
console.log('Fetch functions in QueryClientProvider:', pMatches);
