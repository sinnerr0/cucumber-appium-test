const assert = require('assert')
const path = require('path')
const { isImagePresent, getScreenShotPath } = require('../../../util')

const { Given, When, Then, shared } = require('cucumber')

Given('Image-start app', async () => {
  this.screenShotPath = this.screenShotPath = getScreenShotPath()
  await shared.driver.saveScreenshot(this.screenShotPath)
})

Then('Image-button name is next', async () => {
  assert.equal(
    true,
    await isImagePresent(
      this.screenShotPath,
      path.join(
        process.env.PROJECT_BASE_PATH,
        'features/sample/images/next_btn.png'
      )
    )
  )
})

When('Image-move next', async () => {
  this.el = await shared.driver.$(
    'android=new UiSelector().resourceId("com.example.myapplication:id/button_first")'
  )
  await this.el.click()
  this.screenShotPath = getScreenShotPath()
  await shared.driver.saveScreenshot(this.screenShotPath)
})

Then('Image-next page', async () => {
  assert.equal(
    true,
    await isImagePresent(
      this.screenShotPath,
      path.join(
        process.env.PROJECT_BASE_PATH,
        'features/sample/images/prev_btn.png'
      )
    )
  )
})

When('Image-move prev', async () => {
  this.el = await shared.driver.$(
    'android=new UiSelector().resourceId("com.example.myapplication:id/button_second")'
  )
  await this.el.click()
  this.screenShotPath = getScreenShotPath()
  await shared.driver.saveScreenshot(this.screenShotPath)
})

Then('Image-prev page', async () => {
  assert.equal(
    true,
    await isImagePresent(
      this.screenShotPath,
      path.join(
        process.env.PROJECT_BASE_PATH,
        'features/sample/images/next_btn.png'
      )
    )
  )
})
