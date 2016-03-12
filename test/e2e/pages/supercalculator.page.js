var SupercalculatorPage = function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  this.get = function() {
    browser.get('http://juliemr.github.io/protractor-demo');
  };

  this.title = function() {
    return browser.getTitle();
  };

  this.preencherPrimeiroNumeroCom = function(numero) {
    firstNumber.sendKeys(numero);
  };

  this.preencherSegundoNumeroCom = function(numero) {
    secondNumber.sendKeys(numero);
  };

  this.add = function(a,b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);

    goButton.click();

    return this.latestResult();
  };

  this.calculate = function() {
    goButton.click();
  };

  this.historyCount = function() {
    return history.count();
  };

  this.lastHistory = function() {
    return history.last().getText();
  };

  this.firstHistory = function() {
    return history.first().getText();
  };

  this.latestResult = function() {
    return latestResult.getText();
  }
};

module.exports = SupercalculatorPage;
