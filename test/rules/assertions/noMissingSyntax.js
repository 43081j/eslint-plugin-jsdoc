export default {
  invalid: [
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
          line: 1,
          message: 'Syntax is required: FunctionDeclaration with ' +
            'JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Foo"]:nth-child(1))',
        },
      ],
      options: [{
        contexts: [
          {
            comment: 'JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Foo"]:nth-child(1))',
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
          line: 1,
          message: 'Problematically missing function syntax: `FunctionDeclaration` ' +
            'with `JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Foo"]:nth-child(1))`.',
        },
      ],
      options: [{
        contexts: [
          {
            comment: 'JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Foo"]:nth-child(1))',
            context: 'FunctionDeclaration',
            message: 'Problematically missing function syntax: `{{context}}` with `{{comment}}`.',
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
          line: 1,
          message: 'Syntax is required: FunctionDeclaration',
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
       * @implements {Bar|Foo}
       */
      function quux () {

      }
      `,
      errors: [
        {
          line: 1,
          message: 'Rule `no-restricted-syntax` is missing a `context` option.',
        },
      ],
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
          line: 1,
          message: 'Syntax is required: FunctionDeclaration with ' +
            'JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Bar"]:nth-child(1))',
        },
      ],
      options: [{
        contexts: [
          {
            comment: 'JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Bar"]:nth-child(1))',
            context: 'FunctionDeclaration',
            minimum: 2,
          },
        ],
      }],
    },
  ],
  valid: [
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

      /**
       * @implements {Bar|Foo}
       */
      function bar () {

      }

      /**
       * @implements {Bar|Foo}
       */
      function baz () {

      }
      `,
      options: [{
        contexts: [
          {
            comment: 'JsdocBlock[postDelimiter=""]:has(JsdocTypeUnion > JsdocTypeName[value="Bar"]:nth-child(1))',
            context: 'FunctionDeclaration',
            minimum: 2,
          },
        ],
      }],
    },
  ],
};
