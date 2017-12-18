'use strict';

class LoginForm {
    constructor(){

        this['Form'] = element(by.css('.iris_modal-box'));
        this['Email Address']=element(by.css('input#signup_email'));
        this['Password']=element(by.css('input#login_password'));
        this['Login With Email']=element(by.css('input.iris_btn'));

    }
}

module.exports = LoginForm;
