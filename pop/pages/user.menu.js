'use strict';

class UserMenu {
    constructor() {
        this['User Menu'] = element(by.css('#topnav_user_dropdown'));
        this['Log Out'] = element(by.css('.topnav_desktop_menu_items_dropdown_item_log_out'));
    }
}
module.exports = UserMenu;