import esbuild from 'esbuild';
import cssModulesPlugin from'esbuild-css-modules-plugin';

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outdir: './dist/_esm/',
  format: 'esm',
  sourcemap: true,
  plugins: [cssModulesPlugin()],
  external: ['react', 'react-dom'],
}).catch(() => process.exit(1));
