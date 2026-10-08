const fs = require('fs');

function extract() {
  let combined = '';
  const files = ['old_portfolio.html', 'old_routes1.js', 'old_routes2.js', 'old_index.js'];
  for (const f of files) {
    if (fs.existsSync(f)) {
      combined += fs.readFileSync(f, 'utf8') + '\n';
    }
  }

  const urls = combined.match(/https?:\/\/[^\s"'`<>]+|\/api\/public\/file\/[^\s"'`<>]+/g) || [];
  const unique = [...new Set(urls)];
  console.log('--- FOUND URLS ---');
  unique.forEach(u => console.log(u));
}

extract();
