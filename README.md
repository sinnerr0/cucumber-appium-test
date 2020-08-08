# Cucumber & Appium Test Platform

## Prepare

1. Appium-Desktop download(http://appium.io/)

2. Node.js install(https://nodejs.org/)

3. Java install(JRE or JDK)(https://www.java.com/download/)

   - 시스템 환경 변수에 JAVA_HOME과 path등록. path는 JAVA_HOME/bin

4. Android Studio install(for Android SDK, AVD)(https://developer.android.com/studio)

   - 시스템 환경 변수에 ANDROID_HOME과 path 등록. path는 ANDROID_HOME/platform-tools

5. Git install

6. Install build tool(Windows Required)

- Install CMake(https://cmake.org/download)
  - Add CMake to the system PATH(CMake/bin)

```
# 관리자 권한을 획득한 shell에서 실행해야 함
$ npm install:windows
```

## Install

```
$ npm install
```

## Check Test Environments

```
$ npm run doctor:android
```

## Test Server start

```
$ npm start
```

## Run Test

테스트 하기 전에 appium 서버가 시작(npm start)되어 있어야 함(Appium Desktop에서 서버를 실행시켜도 됨)

.env 파일에서 현재 테스트할 기기에 맞추어 설정이 되어 있어야 함

```
# example
APPIUM_PLATFORMNAME=Android
APPIUM_PLATFORMVERSION=10
# get device name: android case --> $ adb devices
APPIUM_DEVICENAME=R3CMA01FAVA
APPIUM_APP=apps/sample/app-debug.apk
```

test 실행

```
$ npm test
```
