const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('old_'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const tokens = content.match(/eyJ[a-zA-Z0-9_\-\.]+/g) || [];
  if (tokens.length) {
    console.log(`Tokens in ${f}:`, tokens);
  }
  const apikeys = content.match(/apikey['":\s]+([a-zA-Z0-9_\-\.]+)/g) || [];
  if (apikeys.length) {
    console.log(`Apikeys in ${f}:`, apikeys);
  }
});
