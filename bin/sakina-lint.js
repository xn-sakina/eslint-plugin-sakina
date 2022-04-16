#!/usr/bin/env node

require('v8-compile-cache')
require('../lib/service')
  .run()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
