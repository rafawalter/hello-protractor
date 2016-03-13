
module.exports = function() {
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);

  var expect = chai.expect;


  var SupercalculatorPage = new require('../../pages/supercalculator.page.js');
  var page = new SupercalculatorPage();

  this.Given(/^que naveguei para a calculadora$/, function () {
      return page.get();
  });

  this.Given(/^vejo o título "([^"]*)" na página$/, function (titulo) {
    return expect(page.title()).to.eventually.equal(titulo);
  });

  this.Given(/^preenchi o primeiro número com (\d+)$/, function (numero) {
    return page.preencherPrimeiroNumeroCom(numero);
  });

  this.Given(/^preenchi o segundo número com (\d+)$/, function (numero) {
    return page.preencherSegundoNumeroCom(numero);
  });

  this.Given(/^clico no botão para calcular$/, function () {
    return page.calculate();
  });

  this.Given(/^vejo o resultado (\d+)$/, function (resultado) {
    return expect(page.latestResult()).to.eventually.equal(String(resultado));
  });

  this.Given(/^faço a soma de (\d+) com (\d+)$/, function (a, b) {
    return page.add(a, b);
  });

  this.Given(/^vejo (\d+) itens no histórico$/, function (quantidade) {
    return expect(page.historyCount()).to.eventually.equal(Number(quantidade));
  });

  this.Given(/^a última linha do histórico contém "([^"]*)"$/, function (texto) {
    return expect(page.lastHistory()).to.eventually.contain('1 + 2');
  });

  this.Given(/^a primeira linha do histórico contém "([^"]*)"$/, function (texto) {
    return expect(page.firstHistory()).to.eventually.contain('5 + 6');
  });

};
