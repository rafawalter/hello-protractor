exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // selelniumPort: 4444,

  specs: ['./features/**/*.feature'],
  cucumberOpts: {
    require: ['./pages/**/*.js','./features/**/*.js'],
    format: 'pretty',
  },



  multiCapabilities: [{
    browserName: 'chrome'
//  }, {
//    browserName: 'firefox'
  }]
};
