# eslint-plugin-sakina

eslint config rules for quick use.

> *Required: `eslint ^9` and `typescript ^5`*

### Install

```bash
  pnpm add -D eslint-plugin-sakina
```

### Scene

##### normal

```js
// eslint.config.js
module.exports = require('eslint-plugin-sakina/recommended')()
```

##### react

```js
// eslint.config.js
module.exports = require('eslint-plugin-sakina/react')()
```

### Options

```js
// eslint.config.js
module.exports = require('eslint-plugin-sakina/...')({

  // ↓ only one option can be configured:
  // use `projectService`
  projectService: true,
  // or use `project`
  tsconfig: './tsconfig.eslint.json', // or ['./tsconfig.json', './packages/*/tsconfig.json']

  // ↓ config project root dir
  root: __dirname

})
```

### Legacy version

### v6.x

No breaking change.

### v5.x

Migration v5 to v6: upgrade eslint to v9.

### v4.x

No breaking change.

### v3.x

Migration v3 to v4 :

```diff
// eslint.config.js
- module.exports = require('eslint-plugin-sakina/recommended')
+ module.exports = require('eslint-plugin-sakina/recommended')()
```

### v2.x

`@fz6m/eslint-plugin-sakina` : Old version in [v2](https://github.com/xn-sakina/eslint-plugin-sakina/tree/v2) branch.

### License

MIT
