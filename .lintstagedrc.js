import path from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

const lintstagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*': 'prettier --ignore-unknown --write --cache',
};

export default lintstagedConfig;
