import { readFileSync, existsSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const cssExists = existsSync('styles.css');
const requiredSnippets = [
  '<title>Brandveil Studio India | Website Development, Instagram Marketing, Branding &amp; SEO Agency</title>',
  'Brandveil Studio India helps Indian businesses with website development, logo design, content creation, Instagram marketing, branding and SEO.',
  '<h1 id="hero-title">Dikhoge tabhi to bikoge.</h1>',
  'Brandveil Studio India helps businesses look professional online with websites, branding, logo design, content creation, Instagram marketing and SEO.',
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
