const fs = require('fs');

const code = fs.readFileSync('old_routes-BH3LjOmq.js', 'utf8');

const queryMatches = code.match(/queryKey:[^}]+\}/g) || [];
console.log('queryKeys:', queryMatches);

const queryFnMatches = code.match(/queryFn:[^,}]+\}/g) || [];
console.log('queryFns:', queryFnMatches);

// Search for strings containing Cloudflare R2 images or public URLs
const r2Matches = code.match(/https:\/\/[a-zA-Z0-9_\-\.]+\.r2\.dev\/[^\s"'`<>]+/g) || [];
console.log('R2 matches:', [...new Set(r2Matches)]);
