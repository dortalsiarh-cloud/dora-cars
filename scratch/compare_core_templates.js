const fs = require('fs');
const path = require('path');
const https = require('https');

// Let's download key files from pristine theme-raed
const filesToCheck = [
    'src/views/pages/index.twig',
    'src/views/layouts/master.twig',
    'src/views/components/header/header.twig',
    'src/views/components/footer/footer.twig'
];

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

async function run() {
    for (const f of filesToCheck) {
        console.log(`\n=== Comparing ${f} ===`);
        const origContent = await fetchFile(f);
        const ourContent = fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : 'FILE NOT FOUND';
        
        if (origContent === ourContent) {
            console.log('IDENTICAL to original Salla template.');
        } else {
            console.log('DIFFERENT from original Salla template. Length diff:', origContent.length, 'vs', ourContent.length);
        }
    }
}

run();
