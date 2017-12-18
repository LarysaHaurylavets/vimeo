'use strict';

const MasterPage = require('./master.page');
const JoinForm = require('./join.form');
const loginForm = require('./login.form');
const UserForm = require('./user.form');

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
    }
}

module.exports = HomePage;