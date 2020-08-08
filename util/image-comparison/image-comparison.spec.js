const { isImagePresent } = require('../image-comparison')
const path = require('path')

let screenShot = path.join(__dirname, './elvis.JPG')
let comparison = path.join(__dirname, './elvis.JPG')
isImagePresent(screenShot, comparison).then((result) => {
  console.log(path.basename(screenShot), path.basename(comparison), result)
})

let screenShot1 = path.join(__dirname, './screenshot.png')
let comparison2 = path.join(__dirname, './bike.JPG')
isImagePresent(screenShot1, comparison2).then((result) => {
  console.log(path.basename(screenShot1), path.basename(comparison2), result)
})

let screenShot3 = path.join(__dirname, './test.jpg')
let comparison4 = path.join(__dirname, './elvis.JPG')
isImagePresent(screenShot3, comparison4).then((result) => {
  console.log(path.basename(screenShot3), path.basename(comparison4), result)
})

let screenShot5 = path.join(__dirname, './test.jpg')
let comparison6 = path.join(__dirname, './test_noise.jpg')
isImagePresent(screenShot5, comparison6).then((result) => {
  console.log(path.basename(screenShot5), path.basename(comparison6), result)
})

let screenShot7 = path.join(__dirname, './screenshot.png')
let comparison8 = path.join(__dirname, './mirror.JPG')
isImagePresent(screenShot7, comparison8).then((result) => {
  console.log(path.basename(screenShot7), path.basename(comparison8), result)
})
