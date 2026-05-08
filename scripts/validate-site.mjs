import { readFileSync, existsSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const cssExists = existsSync('styles.css');
const requiredSnippets = [
  '<title>Brandveil Studio India | Website Development, Branding, Instagram Marketing &amp; SEO Agency</title>',
  'Brandveil Studio India helps Indian businesses with website development, logo design, branding, content creation, Instagram marketing and SEO.',
  '<h1 id="hero-title">Premium websites, branding and marketing for businesses that want to look bigger.</h1>',
  'Brandveil Studio India is a digital agency offering website development and design, logo design, branding, content creation, Instagram marketing and SEO for Indian businesses.',
  'https://brandveil-studio-india.vercel.app',
  'The Root Institution',
  'Kerala Beauty',
  '+91 9631192011',
];

const missing = requiredSnippets.filter((snippet) => !html.includes(snippet));

if (!cssExists) {
  missing.push('styles.css');
}

if (missing.length > 0) {
  console.error('Site validation failed. Missing:');
  for (const item of missing) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log('Static site validation passed.');
