/*
 * Created by Larysa Haurylavets
 */
const HomePage = require('./pages/home.page');
const JoinForm = require('./pages/join.form');
const LoginForm = require('./pages/login.form');
const UserForm = require('./pages/user.form');
const ItunesPage = require('./pages/iTunes.page');
const UserMenu = require('./pages/user.menu');

class World {
    constructor() {

        this['Home'] = new HomePage();
        this['Join Form'] = new JoinForm();
        this['Login Form'] = new LoginForm();
        this['User'] = new UserForm();
        this['Itunes'] = new ItunesPage();
        this['User Menu'] = new UserMenu();

    };

}

module.exports = new World();