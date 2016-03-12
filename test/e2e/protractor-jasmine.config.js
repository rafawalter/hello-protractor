exports.config = {
  framework: 'jasmine',

  specs: ['./specs/**/*.js', './pages/**/*.js'],

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
