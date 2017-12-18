'use strict';

const MasterPage = require('./master.page');
const JoinForm = require('./join.form');
const loginForm = require('./login.form');
const UserForm = require('./user.form');
const UserMenu = require('./user.menu');

class HomePage extends MasterPage {
    constructor() {
        super();
        this.url = "/cameo";
        this['Join'] = element(by.css('a.topnav_menu_join'));
        this['Login'] = element(by.css('a[href*="/log_in"]'));
        this['Download'] = element(by.css('.button.download'));
        this['Join Form'] = new JoinForm();
        this['Login Form'] = new loginForm();
        this['User'] = new UserForm();
        this['User Menu'] = new UserMenu();

        //elements of page
        this['Intro'] = element(by.css('#intro'));
        this['Phone'] = element(by.css('#phone'));
        this['Features'] = element(by.css('#features'));
        this['Themes'] = element(by.css('#themes'));
        this['Soundtracks'] = element(by.css('#soundtracks'));
        this['Videos'] = element(by.css('#videos'));
        this['Creators'] = element(by.css('#creators'));
        this['Download'] = element(by.css('#download'));
    }
}

module.exports = HomePage;