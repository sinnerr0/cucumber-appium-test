const assert = require('assert')

const { Given, When, Then, shared } = require('cucumber')

Given('I am logged in', () => {})

Given('Native-start app', async () => {
  this.el = await shared.driver.$(
    'android=new UiSelector().resourceId("com.example.myapplication:id/button_first")'
  )
  this.elText = await this.el.getText()
})

Then('Native-button name is next', () => {
  assert.equal(this.elText, 'NEXT')
})

When('Native-move next', async () => {
  await this.el.click()
  this.el = await shared.driver.$(
    'android=new UiSelector().resourceId("com.example.myapplication:id/button_second")'
  )
  this.elText = await this.el.getText()
})

Then('Native-next page', () => {
  assert.equal(this.elText, 'PREVIOUS')
})

When('Native-move prev', async () => {
  await this.el.click()
  this.el = await shared.driver.$(
    'android=new UiSelector().resourceId("com.example.myapplication:id/button_first")'
  )
  this.elText = await this.el.getText()
})

Then('Native-prev page', () => {
  assert.equal(this.elText, 'NEXT')
})
