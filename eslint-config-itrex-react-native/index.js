module.exports = {
  extends: [
    'eslint-config-itrex-react',
  ].map(require.resolve),

  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.android.js',
          '.ios.js'
        ]
      }
    }
  }
};
