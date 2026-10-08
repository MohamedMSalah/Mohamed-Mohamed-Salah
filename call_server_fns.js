const https = require('https');

function callServerFn(id) {
  const url = `https://mmsalahresume26.lovable.app/?_serverFnId=${encodeURIComponent(id)}`;
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Result for', id, res.statusCode);
      console.log(data);
    });
  });
}

// Check all hash IDs in old_index.js
const fs = require('fs');
const code = fs.readFileSync('old_index.js', 'utf8');
const hashes = code.match(/[a-f0-9]{64}/g) || [];
console.log('Server function hashes:', [...new Set(hashes)]);

[...new Set(hashes)].forEach(h => callServerFn(h));
