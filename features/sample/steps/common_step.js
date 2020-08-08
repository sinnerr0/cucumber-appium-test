const wdio = require('webdriverio')
const path = require('path')
const { Before, BeforeAll, After, AfterAll, shared } = require('cucumber')

// set timeout 1 minute. default is 5 seconds.
BeforeAll({ timeout: 60 * 1000 }, async () => {
  shared.driver = await wdio.remote({
    path: process.env.APPIUM_WD_HUB_PATH,
    port: parseInt(process.env.APPIUM_PORT),
    logLevel: 'warn',
    capabilities: {
      platformName: process.env.APPIUM_PLATFORMNAME,
      platformVersion: process.env.APPIUM_PLATFORMVERSION,
      deviceName: process.env.APPIUM_DEVICENAME,
      app: process.env.APPIUM_APP
        ? path.join(process.env.PROJECT_BASE_PATH, process.env.APPIUM_APP)
        : '',
    },
  })
})

AfterAll(async () => {
  await shared.driver.deleteSession()
})
