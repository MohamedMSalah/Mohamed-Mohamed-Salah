const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('old_'));
let allCode = '';
files.forEach(f => {
  allCode += `\n/* FILE: ${f} */\n` + fs.readFileSync(f, 'utf8');
});

// Search for certificate data or objects
const certMatches = allCode.match(/\{[^{}]*certificate[^{}]*\}/gi) || [];
console.log('--- CERTIFICATE MATCHES ---');
console.log(certMatches.slice(0, 10));

// Search for project objects
const projectMatches = allCode.match(/\{[^{}]*(?:Clinic|Alarmus|Manetho|Yalla|title|description|image)[^{}]*\}/gi) || [];
console.log('--- PROJECT / STRING MATCHES ---');
console.log(projectMatches.slice(0, 10));

// Find all image URLs and paths
const images = allCode.match(/(?:https?:\/\/[^\s"'`<>]+|\/api\/[^\s"'`<>]+|\/[^\s"'`<>]*\.(?:png|jpg|jpeg|webp|svg|pdf))/gi) || [];
console.log('--- ALL IMAGES & ASSETS ---');
console.log([...new Set(images)]);
