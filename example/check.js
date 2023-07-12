const { FlatESLint } = require('eslint/use-at-your-own-risk')

const run = async () => {
  const f = new FlatESLint({
    overrideConfig: [
      {
        languageOptions: {
          parserOptions: {
            c: 1,
          },
        },
      },
    ],
  })
  const a = await f.calculateConfigForFile('./tests/a.tsx')
  delete a.languageOptions.globals
  console.log('a: ', a)
}

run()
