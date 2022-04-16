# @fz6m/eslint-plugin-sakina

Sakina eslint config rules for quick use.

### Install

```bash
  pnpm add -D @fz6m/eslint-plugin-sakina
```

### Initial

```bash
  npx sakina-lint init
```

### Scene

##### normal

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:@fz6m/sakina/recommended']
}
```

##### react

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:@fz6m/sakina/react']
}
```

##### v1.x version

You need add the eslint patch setup require to the beginning of the eslint config file.

```js
// .eslintrc.js
require('@fz6m/eslint-plugin-sakina/setup')

// ...
```
