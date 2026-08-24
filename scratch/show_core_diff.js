const fs = require('fs');
const https = require('https');

async function fetchFile(filePath) {
    const url = `https://raw.githubusercontent.com/SallaApp/theme-raed/master/${filePath}`;
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function showDiff(filePath) {
    console.log(`\n================== DIFF FOR ${filePath} ==================`);
    const orig = await fetchFile(filePath);
    const ours = fs.readFileSync(filePath, 'utf8');
    
    console.log('--- ORIGINAL PRISTINE ---');
    console.log(orig);
    console.log('--- OUR CURRENT FILE ---');
    console.log(ours);
}

async function main() {
    await showDiff('src/views/pages/index.twig');
    await showDiff('src/views/layouts/master.twig');
}

main();
