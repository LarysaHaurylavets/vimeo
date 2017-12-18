'use strict';

const MasterPage = require('./master.page');

class ItunesPage extends MasterPage{
    constructor(){
        super();
        this.url = 'https://itunes.apple.com/us/app/cameo-video-editor-movie-maker/id988821661?mt=8';
        this['Content Page'] = element(by.css('#content'));
        this['Size'] = element(by.css('.list>li:nth-child(5)'));
        this['Version'] = element(by.css('.list>li:nth-child(4)>span:nth-child(2)'));
        this['Update'] = element(by.css('.release-date>span:nth-child(2)'));

    }
}

module.exports = ItunesPage;

