'use strict';

class JoinForm {
    constructor() {
        
        this['Form'] = element(by.css('.iris_modal-box'));
        this['User Name'] = element(by.css('input#signup_name'));
        this['Email Address'] = element(by.css('input#signup_email'));
        this['Password'] = element(by.css('input#signup_password'));
        this['Join With Email'] = element(by.css('input.iris_btn'));

    }
}

module.exports = JoinForm;