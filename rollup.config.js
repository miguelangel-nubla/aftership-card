import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: ['src/aftership-card.ts'],
  output: {
    dir: './dist',
    format: 'es',
  },
  plugins: [resolve(), typescript()],
};
