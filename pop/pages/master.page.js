'use strict';

class MasterPage {
    constructor(){
        this.url = browser.get;
        this['Title']=element(by.css('title'));
    }
}

module.exports = MasterPage;
