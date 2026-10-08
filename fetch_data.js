const https = require('https');
const fs = require('fs');

async function fetchServerFn(name, id) {
  return new Promise((resolve) => {
    const url = `https://mmsalahresume26.lovable.app/_serverFn/${id}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`=== ${name} (${res.statusCode}) ===`);
        console.log(data);
        fs.writeFileSync(`${name}.json`, data);
        resolve();
      });
    });
  });
}

async function run() {
  await fetchServerFn('projects_data', '1feafe9ee507669f90052f304aabb3fcc03cd622822c61a01e351cbc5f3c503b');
  await fetchServerFn('site_settings_data', '6e1c851c26039a1e477558b67785ba4bc850b6cd7fffb599cf92eb098ba0b277');
}

run();
