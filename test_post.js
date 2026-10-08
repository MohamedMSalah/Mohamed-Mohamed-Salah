const https = require('https');

const hashes = [
  '1feafe9ee507669f90052f304aabb3fcc03cd622822c61a01e351cbc5f3c503b',
  'cf122bc23426d9bb5be868a700c432c478d852479b68f8e18aa9ffc68a33aa3d',
  'de12bd9d35563b872a36a5ef449972a0daeb4503'
];

function postServerFn(hash) {
  const postData = JSON.stringify([]);
  const options = {
    hostname: 'mmsalahresume26.lovable.app',
    port: 443,
    path: `/?_serverFnId=${hash}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('POST', hash, res.statusCode);
      console.log(data.slice(0, 500));
    });
  });

  req.write(postData);
  req.end();
}

hashes.forEach(postServerFn);
