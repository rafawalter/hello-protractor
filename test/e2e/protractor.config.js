exports.config = {
  framework: 'jasmine',
  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // selelniumPort: 4444,

  specs: ['./specs/**/*.js', './pages/**/*.js'],

  multiCapabilities: [{
    browserName: 'chrome'
//  }, {
//    browserName: 'firefox'
  }]
};
