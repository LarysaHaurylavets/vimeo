/*
 * Created by Larysa Haurylavets
 */
const HomePage=require('');

class World {
    constructor() {
        this['Home'] = new HomePage();
        
    };

}

module.exports = new World();