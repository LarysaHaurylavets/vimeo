const {defineSupportCode} = require('cucumber');
const path = require('path');
const world = require('../pop/world');
const query = require(path.resolve('./framework/helper/query'));
const state = require(path.resolve('./framework/helper/state'));
const Memory = require(path.resolve('./framework/helper/memory'));
const memory = new Memory(path.resolve('./config/' + 'creds.json'));

defineSupportCode(({Given, When, setDefaultTimeout}) =>{
    setDefaultTimeout(timeoutEveryStep);
    Given(/^I am on "(.*)" page$/, (page) => {
        state.setState(page);
        return browser.get(state.getUrl());
    });

    When(/^I click on "(.*)" button$/, (button)=> {
        return query.getProtractorElement(button).click();
    });

    When(/^I wait until element "(.*)" is (not )?visible$/, (element, isNot) => {
        if (isNot) {
            if(element === "Move To") { browser.pause()}
            return browser.wait(EC.invisibilityOf(query.getProtractorElement(element)), defTimeoutExplicit);
        } else {
            return browser.wait(EC.visibilityOf(query.getProtractorElement(element)), defTimeoutExplicit);
        }
    });

    When(/^I type "(.*)" in "(.*)"$/, (text, element) => {
        // check if we have imported constant in Memory object
        let parsedText = (memory[text]) ? memory[text] : text;

        return query.getProtractorElement(element).sendKeys(parsedText);
    });

    When(/^I clear "(.*)"$/, (element) => {
        return query.getProtractorElement(element).clear();
    });
   
});
