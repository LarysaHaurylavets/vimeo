const {defineSupportCode} = require('cucumber');
const path = require('path');
const query = require(path.resolve('./framework/helper/query'));
const state = require(path.resolve('./framework/helper/state'));
const Memory = require(path.resolve('./framework/helper/memory'));
const memory = new Memory(path.resolve('./config/creds.json'));

defineSupportCode(function ({Before, After}) {

    Before({tags: '@login'}, () => {
        state.setState('Home');

        return browser.get(state.getUrl())
            .then(()=>{
                return browser.wait(EC.presenceOf(query.getProtractorElement('Login')));
            })
            .then(() => {
                return query.getProtractorElement('Login').click();
            })
            .then(()=>{
                return browser.wait(EC.presenceOf(query.getProtractorElement('Form in Login Form')));
            })
            .then(() => {
                return browser.wait(EC.presenceOf(query.getProtractorElement('Email Address in Login Form')));
            })
            .then(() => {
                return query.getProtractorElement('Email Address in Login Form').sendKeys(memory['Email']);
            })
            .then(() => {
                return browser.wait(EC.presenceOf(query.getProtractorElement('Password in Login Form')));
            })
            .then(() => {
                return query.getProtractorElement('Password in Login Form').sendKeys(memory['Pass']);
            })
            .then(() => {
                return query.getProtractorElement('Login With Email in Login Form').click();
            })              
            .then(()=> {
                return browser.wait(EC.invisibilityOf(query.getProtractorElement('User Avatar in User')));
            });
    });

    After({tags: '@logout'}, () => {
        state.setState('Home');
        return browser.wait(EC.presenceOf(query.getProtractorElement('User Avatar in User')))
            .then(() => {
                return browser.actions().mouseMove('User Menu in User').perform();
            })
            .then(() => {
                return query.getProtractorElement('Log Out in User Menu').click();
            })
            .then(() => {
                return browser.wait(EC.presenceOf(query.getProtractorElement('Login')));
            })
            
    }); 

    

    
});
