/*
 * Created by Larysa Haurylavets
 */

"use strict";

const path = require("path");

exports.config = {
    // Base URL for application server
    baseUrl: 'https://vimeo.com/cameo',
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-notifications', '--disable-infobars']
        },
        platform: "Windows 10",
        maxDuration: 10800
    },
    specs: [
        path.resolve('./features/**.feature')
    ],
    onPrepare: function () {
        browser.driver.manage().window().maximize(); //full screen mode
        browser.waitForAngularEnabled(false);
        global.EC = protractor.ExpectedConditions;
        global.defTimeoutExplicit = 5000;
        global.timeoutEveryStep = 60 * 1000;
    },
    cucumberOpts: {
        require: [path.resolve('./step_definitions/**.js')],        
        tags: ['@smoke']
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework')
};