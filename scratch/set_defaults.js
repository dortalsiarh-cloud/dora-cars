const fs = require('fs');
const tj = JSON.parse(fs.readFileSync('twilight.json', 'utf8'));

// Make sure our custom components are default on home page
tj.components.forEach(c => {
    c.is_default = true;
});

fs.writeFileSync('twilight.json', JSON.stringify(tj, null, 4), 'utf8');
console.log('Set is_default = true on all 12 components.');
