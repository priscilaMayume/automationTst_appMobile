const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// const { saveScreenshot } = require('webdriverio/build/commands/browser');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);


// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();


/** @type {CodeceptJS.MainConfig} */
exports.config = {
 name: 'automationTst_appMobile',
 tests: './*_test.js',
 output: './output',
 helpers: {
  Appium: {
    host: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    platform: process.env.PLATFORM || 'Android',
    app: process.env.APP || '/Users/priscilahirotsu/pessoal/estudo/projetos/qaFood/qaZandoapp.apk',
    desiredCapabilities: {
      deviceName: process.env.DEVICE || 'emulator-5554',
      platformVersion: process.env.VERSION || '13.0',
      appPackage:
        (process.env.PLATFORM || 'Android') == "Android" ? (process.env.PACKAGE || 'com.qazandoapp') : "",
      appActivity:
        (process.env.PLATFORM || 'Android') == "Android" ? (process.env.ACTIVITY || 'MainActivity') : "",
      automationName: process.env.AUTOMATIONNAME || 'UiAutomator2'
    }
   }
 },
 include: {
   I: './steps_file.js'
 },
 bootstrap: null,
 mocha: {},
 plugins: {
   retryFailedStep: {
     enabled: true
   },
   htmlReporter: {
     enabled: true
   },
   screenshotOnFail: {
     enabled: true
   }
 }
}
