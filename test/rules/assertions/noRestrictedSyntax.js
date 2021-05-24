export default {
  invalid: [
    {
      code: `
      /**
       *
       */
      function quux () {

      }
      `,
      errors: [
        {
          line: 2,
          message: 'Syntax is restricted: FunctionDeclaration.',
        },
      ],
      options: [{
        contexts: [
          'FunctionDeclaration',
        ],
      }],
    },
    {
      code: `
      /**
       *
       */
      function quux () {

      }
      `,
      errors: [
        {
          line: 2,
          message: 'Oops: `FunctionDeclaration`.',
        },
      ],
      options: [{
        contexts: [
          {
            context: 'FunctionDeclaration',
            message: 'Oops: `{{context}}`.',
          },
        ],
      }],
    },
    {
      code: `
      /**
       * @implements {Bar|Foo}
       */
      function quux () {

      }
      `,
      errors: [
        {
          line: 2,
          message: 'Syntax is restricted: FunctionDeclaration.',
        },
      ],
      options: [{
        contexts: [
          {
            comment: 'JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Bar"]:nth-child(1))',
            context: 'FunctionDeclaration',
          },
        ],
      }],
    },
    {
      code: `
      /**
       * @implements {Bar|Foo}
       */
      function quux () {

      }
      `,
      errors: [
        {
          line: 2,
          message: 'The bar one: FunctionDeclaration.',
        },
      ],
      options: [{
        contexts: [
          {
            comment: 'JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Foo"]:nth-child(1))',
            context: 'FunctionDeclaration',
            message: 'The foo one: {{context}}.',
          },
          {
            comment: 'JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Bar"]:nth-child(1))',
            context: 'FunctionDeclaration',
            message: 'The bar one: {{context}}.',
          },
        ],
      }],
    },
    {
      code: `
      /**
       * @implements {Bar|Foo}
       */
      function quux () {

      }
      `,
      errors: [
        {
          line: 2,
          message: 'Rule `no-restricted-syntax` is missing a `context` option.',
        },
      ],
    },
  ],
  valid: [
    {
      code: `
      /**
       *
       */
      function quux () {

      }
      `,
      options: [{
        contexts: [
          'FunctionExpression',
        ],
      }],
    },
    {
      code: `
      /**
       * @implements {Bar|Foo}
       */
      function quux () {

      }
      `,
      options: [{
        contexts: [
          {
            comment: 'JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Foo"]:nth-child(1))',
            context: 'FunctionDeclaration',
          },
        ],
      }],
    },
  ],
};
