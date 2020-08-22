const reporter = require('cucumber-html-reporter')
require('dotenv').config()

const options = {
  metadata: {
    'App Version': process.env.APP_VERSION,
    Platform: process.env.APPIUM_PLATFORMNAME,
  },
  name: process.env.APPIUM_APP, // app name
  brandTitle: 'QA Report', // report name
  theme: 'bootstrap',
  output: 'tmp/cucumber_report.html',
  jsonFile: 'tmp/cucumber_report.json',
  screenshotsDirectory: 'tmp/',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  storeScreenshots: true,
  launchReport: true,
}

reporter.generate(options)
