
const path = require('path');
const targetFileName = 'script';
require('esbuild').build({
  entryPoints: [path.join(__dirname, `${targetFileName}.ts`)],
  outfile: path.join(__dirname, '..', `${targetFileName}.js`),
  platform: 'browser',
  bundle: true,
  target: ['chrome60', 'firefox60', 'safari11', 'edge20'],
  sourcemap: false,
  minify: true,
}).catch(() => process.exit(1));
