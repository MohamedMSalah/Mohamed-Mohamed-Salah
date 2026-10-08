const fs = require('fs');

const code = fs.readFileSync('old_routes-BH3LjOmq.js', 'utf8');

// Find fetch or api routes
const fetches = code.match(/\/api\/[a-zA-Z0-9_\-\/]+/g) || [];
console.log('API routes in routes-BH3LjOmq.js:', [...new Set(fetches)]);

// Look for data structures or keywords
const lines = code.split(';').filter(l => l.includes('certificate') || l.includes('project') || l.includes('portrait') || l.includes('experience'));
console.log('Interesting snippets:', lines.slice(0, 10));
