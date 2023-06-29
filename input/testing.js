const fs = require('fs');
const createLogo = require('./logoCreator');

describe('Logo Creator', () => {
  beforeEach(() => {
    if (fs.existsSync('logo.svg')) {
      fs.unlinkSync('logo.svg');
    }
  });

  it('creates a logo and saves it as an SVG file', () => {
    createLogo();

    expect(fs.existsSync('logo.svg')).toBe(true);

    const svgContent = fs.readFileSync('logo.svg', 'utf-8');

    expect(svgContent).toContain('<circle cx="100" cy="100" r="90" fill="white" />');
    expect(svgContent).toContain('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="100">AB</text>');
  });
});
