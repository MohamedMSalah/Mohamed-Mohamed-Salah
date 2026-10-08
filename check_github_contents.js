const https = require('https');

const repos = ['Manetho-ui', 'yalla_5roga', 'yalla-5roga-backend', 'Weather_app'];

repos.forEach(repo => {
  const options = {
    hostname: 'api.github.com',
    path: '/repos/MohamedMSalah/' + repo + '/contents',
    headers: { 'User-Agent': 'Mozilla/5.0' }
  };
  https.get(options, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const contents = JSON.parse(data);
        console.log('===', repo, '===');
        if (Array.isArray(contents)) {
          contents.forEach(c => console.log(c.name, '|', c.type, '|', c.download_url));
        }
      } catch(e) {
        console.log(repo, 'error:', e.message);
      }
    });
  });
});
