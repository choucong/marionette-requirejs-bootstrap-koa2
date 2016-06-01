'use strict';

const fs = require('fs');
const util = require('util');
const path = require('path');


process.env.NODE_ENV =  process.argv.lastIndexOf('-online') > -1 ? 'production' : 'development';

let config = require('../config/main');
let extendConfig = {};

if (config.extend) {

  let extPath = path.resolve(config.extend);

  extendConfig = fs.existsSync(extPath) ? require(extPath) : extendConfig;
}

module.exports = util._extend(config, extendConfig);
