'use strict';

class UserForm {
    constructor() {
        this['User Avatar'] = element(by.css('#topnav_menu_avatar'));
        this['User Menu'] = element(by.css('#topnav_user_dropdown'));
    }
}
module.exports = UserForm;