exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: ['./features/**/*.feature'],
  cucumberOpts: {
    require: ['./pages/**/*.js','./features/**/*.js'],
    format: 'pretty',
  },


  directConnect: false,
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [{
//    browserName: 'chrome'
//  }, {
//      browserName: 'firefox'
//    }, {
      browserName: 'phantomjs',
      'phantomjs.binary.path': './node_modules/phantomjs-prebuilt/bin/phantomjs',
      'phantomjs.cli.args': '--webdriver --webdriver-logfile=webdriver.log',
//      'phantomjs.cli.args': '--debug=true --webdriver --webdriver-logfile=webdriver.log --webdriver-loglevel=DEBUG',
      version: '',
      platform: 'ANY'
  }]
};
