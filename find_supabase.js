const fs = require('fs');

const code = fs.readFileSync('old_dist-DKxRsHch.js', 'utf8') + fs.readFileSync('old_routes-BH3LjOmq.js', 'utf8');

// Find Supabase anon key and API calls
const anonKeyMatch = code.match(/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\.[a-zA-Z0-9_\-\.]+/g);
console.log('Supabase JWT/Anon Keys:', anonKeyMatch);

const tableMatches = code.match(/from\(['"]([a-zA-Z0-9_\-]+)['"]\)/g);
console.log('Tables queried:', [...new Set(tableMatches)]);
