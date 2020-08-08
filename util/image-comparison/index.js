const cv = require('opencv4nodejs')

async function loadImage(screenImagePath, comparisonImagePath) {
  const originalMatPromise = cv.imreadAsync(screenImagePath)
  const waldoMatPromise = cv.imreadAsync(comparisonImagePath)
  return ([originalMat, waldoMat] = await Promise.all([
    originalMatPromise,
    waldoMatPromise,
  ]))
}

/**
 * 템플릿 매칭은 동일한 크기와 방향을 가진 똑같은 이미지를 검색할 때 좋은 결과가 나옴
 * @param {string}} screenImagePath(absolute path)
 * @param {string} comparisonImagePath(absolute path)
 */
const isImagePresent = async (screenImagePath, comparisonImagePath) => {
  // Load images
  const [screenImageMat, comparisonImageMat] = await loadImage(
    screenImagePath,
    comparisonImagePath
  )
  // Match template (the brightest locations indicate the highest match)
  // In the OpenCV doc, the option 5 refers to the algorithm called CV_TM_CCOEFF_NORMED
  const matched = screenImageMat.matchTemplate(comparisonImageMat, 5)
  const minMaxLoc = matched.minMaxLoc()
  const threshold = 0.9
  return minMaxLoc.maxVal > threshold
}

module.exports = {
  isImagePresent,
}
