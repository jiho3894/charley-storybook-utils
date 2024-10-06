import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';

export default {
  input: 'stories/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    PeerDepsExternalPlugin(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      modules: true,
      extract: false,
      use: ['sass'],
    }),
    babel({
      presets: ['@emotion/babel-preset-css-prop'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
