const comparison = require('./image-comparison')
const path = require('path')

function getScreenShotPath() {
  return path.join(process.env.PROJECT_BASE_PATH, `tmp/${Date.now()}.png`)
}

module.exports = {
  ...comparison,
  getScreenShotPath,
}
