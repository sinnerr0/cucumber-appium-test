require('dotenv').config()
require('cucumber').shared = {}
const path = require('path')
const fs = require('fs')
if (!fs.existsSync(path.join(__dirname, 'tmp'))) {
  fs.mkdirSync('tmp')
}
process.env.PROJECT_BASE_PATH = __dirname
// default timeout
// const { setDefaultTimeout } = require('cucumber')
// setDefaultTimeout(60 * 1000)
module.exports = {}
