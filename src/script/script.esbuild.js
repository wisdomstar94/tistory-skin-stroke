
const path = require('path');
const targetFileName = 'script';

/** @type {import('esbuild').BuildOptions} */
const esbuildOptions = {
  entryPoints: [path.join(__dirname, `${targetFileName}.ts`)],
  // outfile: path.join(__dirname, '..', `${targetFileName}.js`),
  platform: 'browser',
  bundle: true,
  target: ['chrome60', 'firefox60', 'safari11', 'edge20'],
  sourcemap: false,
  minify: true,
};

require('esbuild').build({
  ...esbuildOptions,
  outfile: path.join(__dirname, '..', `${targetFileName}.js`),
}).catch(() => process.exit(1));

require('esbuild').build({
  ...esbuildOptions,
  outfile: path.join(__dirname, '..', 'images', `${targetFileName}.js`),
}).catch(() => process.exit(1));

