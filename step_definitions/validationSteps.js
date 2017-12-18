const { defineSupportCode } = require('cucumber');
const fs = require('fs');
const path = require('path');
const world = require('../pop/world');
const query = require(path.resolve('./framework/helper/query'));
const state = require(path.resolve('./framework/helper/state'));
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();


defineSupportCode(({ Then, setDefaultTimeout }) => {
    setDefaultTimeout(timeoutEveryStep);

    Then(/^I should be on "(.*)" page$/, (page) => {
        state.setState(page);
        return expect(browser.getCurrentUrl()).to.eventually.contain(state.getUrl());
    });

    Then(/^Page title should be "(.*)"$/, (title) => {
        return expect(browser.getTitle()).to.eventually.eql(title);
    });

    Then(/^"(.*)" element should be visible$/, (element) => {
        return expect(query.getProtractorElement(element).isPresent()).to.eventually.be.true;
    });

    Then(/^Text of element "(.*)" should (not )?be "(.*)"$/, (element, isNot, value) => {
        if (isNot) {
            return expect(query.getProtractorElement(element).getText()).to.not.equal(value);
        } else {
            return expect(query.getProtractorElement(element).getText()).to.eventually.eql(value);
        }
    });

});

