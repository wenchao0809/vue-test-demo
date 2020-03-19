module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 7,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true
	},
	extends: [ 'eslint:recommended', 'plugin:vue/recommended'],
	rules: {
		semi: 2,
		quotes: [ 1, 'single' ],
		indent: ["error", 2],
		'max-len': [2, { 'code': 100 }],
		'no-var': 2,
		'no-useless-escape': 2,
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': 0,
		'no-console' : 0
	},
	globals: {
		"process": false,
		"axios": false,
		"console": false,
		"debugger": false,
		'qq': false
	}
}
