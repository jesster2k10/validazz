module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 6,
        },
      },
    ],
    '@babel/preset-flow',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
  ],
}
