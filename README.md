# eslint-plugin-sakina (Flat config version)

Sakina eslint config rules for quick use.

> **Warning**
> 
> Currently eslint flat config is experimental, please use it with care.

> **Note**
> 
> Enable autofix required [vscode-eslint](https://github.com/microsoft/vscode-eslint) extension >= 2.3.0 and set `"eslint.experimental.useFlatConfig": true` config.

### Install

```bash
  pnpm add -D eslint-plugin-sakina
```

### Scene

##### normal

```js
// eslint.config.js
module.exports = require('eslint-plugin-sakina/recommended')
```

##### react

```js
// eslint.config.js
module.exports = require('eslint-plugin-sakina/react')
```

### Legacy version

 - `@fz6m/eslint-plugin-sakina` : Old version in [v2](https://github.com/xn-sakina/eslint-plugin-sakina/tree/v2) branch.

### License

MIT
