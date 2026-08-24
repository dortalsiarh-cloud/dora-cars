const fs = require('fs');
const path = require('path');

const tj = JSON.parse(fs.readFileSync('twilight.json', 'utf8'));

function getSvgDataUri(filename) {
    const svgPath = path.join('src', 'assets', 'images', 'components', filename);
    if (fs.existsSync(svgPath)) {
        const content = fs.readFileSync(svgPath, 'utf8');
        return `data:image/svg+xml;base64,${Buffer.from(content).toString('base64')}`;
    }
    // Fallback default SVG
    const fallback = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%"><rect width="400" height="240" rx="12" fill="#0f172a"/><text x="200" y="125" fill="#f8fafc" font-size="16" font-family="sans-serif" text-anchor="middle">G.Arrow Component</text></svg>`;
    return `data:image/svg+xml;base64,${Buffer.from(fallback).toString('base64')}`;
}

const componentImages = {
    'home.store-identity-banner': getSvgDataUri('speero-hero.svg'),
    'home.speero-hero': getSvgDataUri('speero-hero.svg'),
    'home.speero-payment-marquee': getSvgDataUri('speero-payment-marquee.svg'),
    'home.speero-brands': getSvgDataUri('speero-brands.svg'),
    'home.speero-categories': getSvgDataUri('speero-categories.svg'),
    'home.speero-offers-banner': getSvgDataUri('speero-offers-banner.svg')
};

tj.components.forEach(c => {
    if (componentImages[c.path]) {
        c.image = componentImages[c.path];
    }
});

fs.writeFileSync('twilight.json', JSON.stringify(tj, null, 4), 'utf8');
console.log('Successfully added image property to all custom components.');
