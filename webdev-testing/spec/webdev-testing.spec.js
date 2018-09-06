describe ('A suite', function() {
    it('contains a spec with an expectation', function() {
        //Test code here
        let myValue = false;
        expect(myValue).toBe(false);
    });
});

let BetterDate = require('../webdev-testing');

describe ('BetterDate', function() {
    it('should return the day of the week', function() {
        let betterDate = new BetterDate('06 Sep 2018');
        expect(betterDate.getDay()).toBe('Thursday');
    });
});