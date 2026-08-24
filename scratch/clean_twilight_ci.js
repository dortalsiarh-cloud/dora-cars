const fs = require('fs');

const tj = JSON.parse(fs.readFileSync('twilight.json', 'utf8'));

// Clean all base64 images from twilight.json
// Use official clean CDN URLs or clean standard paths
const standardCdnImages = {
    'home.store-identity-banner': 'https://cdn.salla.network/images/themes/components/home/enhanced-slider.png',
    'home.speero-hero': 'https://cdn.salla.network/images/themes/components/home/main-links.png',
    'home.speero-payment-marquee': 'https://cdn.salla.network/images/themes/components/home/enhanced-square-banners.png',
    'home.speero-brands': 'https://cdn.salla.network/images/themes/components/home/brands.png',
    'home.speero-categories': 'https://cdn.salla.network/images/themes/components/home/main-links.png',
    'home.speero-offers-banner': 'https://cdn.salla.network/images/themes/components/home/enhanced-square-banners.png'
};

tj.components.forEach(c => {
    if (standardCdnImages[c.path]) {
        c.image = standardCdnImages[c.path];
    }
    // Also check if any field has base64 value
    (c.fields || []).forEach(f => {
        if (typeof f.value === 'string' && f.value.startsWith('data:image')) {
            f.value = null;
        }
    });
});

const cleanJsonStr = JSON.stringify(tj, null, 4);
console.log('Clean twilight.json size:', cleanJsonStr.length, 'bytes (', (cleanJsonStr.length/1024).toFixed(1), 'KB )');
fs.writeFileSync('twilight.json', cleanJsonStr, 'utf8');
console.log('Successfully cleaned twilight.json from all base64 data.');
