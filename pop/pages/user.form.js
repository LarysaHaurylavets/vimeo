'use strict';

const UserMenu = require('./user.menu');

class UserForm {
    constructor() {
        this['User Avatar'] = element(by.css('#topnav_menu_avatar'));
        this['User Menu'] = new UserMenu();
    }
}

module.exports = UserForm;