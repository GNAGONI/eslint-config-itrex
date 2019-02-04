module.exports = {
    extends: [
        'eslint-config-airbnb/rules/react',
        'eslint-config-airbnb/rules/react-a11y',
        'eslint-config-itrex-base',
    ].map(require.resolve),

    rules: {
        'no-use-before-define': 0,
        'react/prefer-stateless-function': 0,
        'react/jsx-boolean-value': [1, 'always'],
        'react/jsx-filename-extension': [
            'error',
            {
                'extensions': [
                '.js'
                ]
            }
        ],
        'react/jsx-closing-bracket-location': [
            'warn',
            {
                'selfClosing': 'tag-aligned',
                'nonEmpty': 'after-props'
            }
        ],
        'react/sort-comp': [1, {
            'order': [
              'prop-types',
              'platform-refs',
              'instance-variables',
              'lifecycle',
              'instance-methods',
              'static-methods',
              'everything-else',
              'render'
            ],
            'groups': {
              'prop-types': [
                'propTypes',
                'defaultProps'
              ],
              'platform-refs': [
                'displayName',
                'statics',
                'mixins',
                'contextTypes',
                'childContextTypes',
                'state'
              ],
              'lifecycle': [
                'constructor',
                'getDefaultProps',
                'getInitialState',
                'getChildContext',
                'getDerivedStateFromProps',
                'componentWillMount',
                'UNSAFE_componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'UNSAFE_componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'UNSAFE_componentWillUpdate',
                'getSnapshotBeforeUpdate',
                'componentDidUpdate',
                'componentDidCatch',
                'componentWillUnmount'
              ]
            }
          }
        ]
    }
};
