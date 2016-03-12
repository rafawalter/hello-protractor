exports.config = {
  framework: 'jasmine',
  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  selelniumPort: 4444,
  specs: ['spec.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }, {
    browserName: 'firefox'
  }]
};
