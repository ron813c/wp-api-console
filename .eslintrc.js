/* eslint-disable quote-props, key-spacing */

module.exports = {
	parserOptions: {
		ecmaVersion: 6,
	},
	env : {
		browser : true,
		node    : true,
		mocha   : true,
		es6     : true,
	},
	parser : 'babel-eslint',
	rules  : {
		// Recommended rules
		'no-cond-assign'           : 'error',
		'no-constant-condition'    : 'error',
		'no-control-regex'         : 'error',
		'no-debugger'              : 'error',
		'no-dupe-args'             : 'error',
		'no-dupe-keys'             : 'error',
		'no-duplicate-case'        : 'error',
		'no-empty'                 : [ 'error', { allowEmptyCatch : true } ],
		'no-empty-character-class' : 'error',
		'no-ex-assign'             : 'error',
		'no-extra-boolean-cast'    : 'error',
		'no-extra-semi'            : 'error',
		'no-func-assign'           : 'error',
		'no-invalid-regexp'        : 'error',
		'no-irregular-whitespace'  : 'error',
		'no-negated-in-lhs'        : 'error',
		'no-obj-calls'             : 'error',
		'no-prototype-builtins'    : 'error',
		'no-regex-spaces'          : 'error',
		'no-sparse-arrays'         : 'error',
		'no-unexpected-multiline'  : 'error',
		'no-unreachable'           : 'error',
		'no-unsafe-finally'        : 'error',
		'use-isnan'                : 'error',
		'valid-jsdoc'              : 'error',
		'valid-typeof'             : 'error',
		// Best practices
		'accessor-pairs'        : 'error',
		'array-callback-return' : 'error',
		'consistent-return'     : 'error',
		'curly'                 : [ 'error', 'all' ],
		'dot-location'          : [ 'error', 'property' ],
		'dot-notation'          : 'error',
		'eqeqeq'                : 'error',
		'no-caller'             : 'error',
		'no-div-regex'          : 'error',
		'no-empty-pattern'      : 'error',
		'no-eval'               : 'error',
		'no-extend-native'      : 'error',
		'no-extra-bind'         : 'error',
		'no-extra-label'        : 'error',
		'no-fallthrough'        : 'error',
		'no-floating-decimal'   : 'error',
		'no-implied-eval'       : 'error',
		'no-iterator'           : 'error',
		'no-labels'             : 'error',
		'no-lone-blocks'        : 'error',
		'no-loop-func'          : 'error',
		'no-multi-spaces'       : [ 'error', {
			exceptions : {
				Property             : true,
				VariableDeclarator   : true,
				AssignmentExpression : true,
				ImportDeclaration    : true,
			},
		} ],
		'no-multi-str'                 : 'error',
		'no-native-reassign'           : 'error',
		'no-new-func'                  : 'error',
		'no-new-wrappers'              : 'error',
		'no-octal'                     : 'error',
		'no-octal-escape'              : 'error',
		'no-proto'                     : 'error',
		'no-redeclare'                 : 'error',
		'no-return-assign'             : 'error',
		'no-script-url'                : 'error',
		'no-self-assign'               : 'error',
		'no-self-compare'              : 'error',
		'no-sequences'                 : 'error',
		'no-throw-literal'             : 'error',
		'no-unmodified-loop-condition' : 'error',
		'no-unused-expressions'        : 'error',
		'no-unused-labels'             : 'error',
		'no-useless-call'              : 'error',
		'no-useless-concat'            : 'error',
		'no-useless-escape'            : 'error',
		'no-void'                      : 'error',
		'no-warning-comments'          : 'warn',
		'no-with'                      : 'error',
		'radix'                        : 'error',
		'wrap-iife'                    : [ 'error', 'inside' ],
		// Variables
		'no-undef'             : 'error',
		'no-undef-init'        : 'error',
		'no-unused-vars'       : [ 'error', {
			varsIgnorePattern : '^mocha$',
			args              : 'none',
		} ],
		'no-use-before-define' : 'error',
		// Style
		'array-bracket-spacing'         : [ 'error', 'always' ],
		'brace-style'                   : [ 'error', '1tbs' ],
		'camelcase'                     : 'error',
		'comma-dangle'                  : [ 'error', 'always-multiline' ],
		'comma-spacing'                 : 'error',
		'comma-style'                   : 'error',
		'computed-property-spacing'     : [ 'error', 'always' ],
		'consistent-this'               : [ 'error', 'self' ],
		'eol-last'                      : 'error',
		'indent'                        : [ 'error', 'tab', { SwitchCase : 1 } ],
		'jsx-quotes'                    : 'error',
		'key-spacing'                   : [ 'error', {
			beforeColon : false,
			afterColon  : true,
			mode        : 'minimum',
		} ],
		'keyword-spacing'               : 'error',
		'linebreak-style'               : 'error',
		'max-len'                       : [ 'warn', 140 ],
		'max-statements-per-line'       : 'error',
		'new-cap'                       : 'error',
		'no-mixed-operators'            : 'error',
		'no-mixed-spaces-and-tabs'      : 'error',
		'no-nested-ternary'             : 'error',
		'no-new-object'                 : 'error',
		'no-spaced-func'                : 'error',
		'no-trailing-spaces'            : 'error',
		'no-unneeded-ternary'           : 'error',
		'no-whitespace-before-property' : 'error',
		'object-curly-spacing'          : [ 'error', 'always' ],
		'one-var'                       : [ 'error', 'never' ],
		'operator-assignment'           : 'error',
		'operator-linebreak'            : [ 'error', 'after', {
			overrides : {
				'?' : 'before',
				':' : 'before',
			},
		} ],
		'quote-props'                 : [ 'error', 'as-needed', { keywords: true } ],
		'quotes'                      : [ 'error', 'single' ],
		'semi'                        : 'error',
		'semi-spacing'                : 'error',
		'space-before-blocks'         : [ 'error', 'always' ],
		'space-before-function-paren' : [ 'error', 'never' ],
		'space-in-parens'             : [ 'error', 'always' ],
		'space-infix-ops'             : [ 'error', { int32Hint: false } ],
		'space-unary-ops'             : [ 'error', {
			overrides: {
				'!': true,
			},
		} ],
		'spaced-comment'              : 'error',
		'unicode-bom'                 : 'error',
		// ES6
		'arrow-body-style'        : [ 'error', 'as-needed', {
			requireReturnForObjectLiteral : true,
		} ],
		'arrow-parens'            : [ 'error', 'as-needed' ],
		'arrow-spacing'           : 'error',
		'constructor-super'       : 'error',
		'no-class-assign'         : 'error',
		'no-confusing-arrow'      : 'error',
		'no-const-assign'         : 'error',
		'no-dupe-class-members'   : 'error',
		'no-duplicate-imports'    : 'error',
		'no-new-symbol'           : 'error',
		'no-this-before-super'    : 'error',
		'no-useless-computed-key' : 'error',
		'no-useless-constructor'  : 'error',
		'no-useless-rename'       : 'error',
		'no-var'                  : 'error',
		'object-shorthand'        : 'error',
		'prefer-arrow-callback'   : 'error',
		'prefer-const'            : 'error',
		'prefer-rest-params'      : 'error',
		'prefer-spread'           : 'error',
		'require-yield'           : 'error',
		'rest-spread-spacing'     : 'error',
		'template-curly-spacing'  : [ 'error', 'always' ],
		// Miscellaneous
		'strict' : [ 'error', 'never' ],
		// React
		'react/no-danger'                 : 'error',
		'react/no-deprecated'             : 'error',
		'react/no-did-mount-set-state'    : 'error',
		'react/no-did-update-set-state'   : 'error',
		'react/no-direct-mutation-state'  : 'error',
		'react/no-is-mounted'             : 'error',
		'react/no-render-return-value'    : 'error',
		'react/no-unknown-property'       : 'error',
		'react/prefer-es6-class'          : 'error',
		'react/prefer-stateless-function' : 'warn',
		'react/react-in-jsx-scope'        : 'error',
		'react/require-render-return'     : 'error',
		'react/self-closing-comp'         : [ 'error', { component : true, html : true } ],
		// JSX
		'react/jsx-boolean-value'            : 'error',
		'react/jsx-closing-bracket-location' : [ 'error', 'line-aligned' ],
		'react/jsx-curly-spacing'            : [ 'error', 'always' ],
		'react/jsx-equals-spacing'           : 'error',
		'react/jsx-filename-extension'       : [ 'warn', { extensions: [ '.js' ] } ],
		'react/jsx-first-prop-new-line'      : [ 'error', 'multiline' ],
		'react/jsx-indent'                   : [ 'error', 'tab' ],
		'react/jsx-indent-props'             : [ 'error', 'tab' ],
		'react/jsx-key'                      : 'error',
		'react/jsx-no-bind'                  : 'error',
		'react/jsx-no-comment-textnodes'     : 'error',
		'react/jsx-no-duplicate-props'       : 'error',
		'react/jsx-no-target-blank'          : 'error',
		'react/jsx-no-undef'                 : 'error',
		'react/jsx-pascal-case'              : 'error',
		'react/jsx-space-before-closing'     : 'error',
		'react/jsx-uses-react'               : 'error',
		'react/jsx-uses-vars'                : 'error',
		'react/jsx-wrap-multilines'          : 'error',
	},
	plugins : [
		'react',
	],
	settings : {
		react : {
			version : require( './package.json' ).dependencies.react,
		},
	},
	globals: {
		expect: true,
	},
};
