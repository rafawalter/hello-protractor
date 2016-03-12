var SupercalculatorPage = new require('../pages/supercalculator.page.js');

describe('Protractor Demo App', function() {
  var page = new SupercalculatorPage();

  beforeEach(function() {
    page.get();
  });

  it('should have a title',  function() {
    expect(page.title()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    expect(page.add(1,2)).toEqual('3');

    expect(page.latestResult()).toEqual('3');
  });

  it('should add four and six', function() {
    page.add(4,6);

    expect(page.latestResult()).toEqual('10');
  });

  it('should have a history', function() {
    page.add(1,2);
    page.add(3,4);

    expect(page.historyCount()).toEqual(2);

    page.add(5,6);

    expect(page.historyCount()).toEqual(3);

    expect(page.lastHistory()).toContain('1 + 2');
    expect(page.firstHistory()).toContain('5 + 6');
  });
});
