const state = require('./state');
class Query {
    constructor() {
        /** @type {string} */
        this.delimiter = " in ";
        this.arrayDelimiter = " of ";
        this.first = "#First";
        this.last = "#Last";
    }

    /**
     *
     * @param elementName {String} Name of the component in page object
     * @returns {ElementFinder || ElementArrayFinder}
     */
    getProtractorElement(elementName) {
        if (elementName.includes(this.delimiter)) {
            let elements = elementName.split(this.delimiter).reverse();
            let elementState = state.getState();
            elements.map((elm) => {
                if (elm.includes(this.arrayDelimiter)){
                    let arr = elm.split(this.arrayDelimiter).reverse();
                    elementState = this._getElementByKeys(arr[0], arr[1], elementState);
                } else{
                    elementState = elementState[elm];
                }
            });           
            return elementState;
        } else {
            if (elementName.includes(this.arrayDelimiter)){
                let arr = elementName.split(this.arrayDelimiter).reverse();
                return this._getElementByKeys(arr[0], elementName, state.getState());
            }else {
                return state.getState()[elementName];
            }
        }

    }

    _getElementPositionInArray(element){
        let position = element.replace(/#(\d+) of .+/, /$1/);
        return parseInt(position) - 1;
    }

    _getElementByKeys(root, element, state){
        switch(element) {
            case this.first:
                return state[root].first();
                break;

            case this.last:
                return state[root].last();
                break;

            default:
                return state[root].get(this._getElementPositionInArray(element));
                break;
        }
    }


}

module.exports = new Query();
