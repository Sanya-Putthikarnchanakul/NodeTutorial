const Result = require('./Result');

class AddProduct extends Result {
    constructor (result, product) {
        super (result.isError, result.errorCode, result.errorMessage);
        this.product = product;
    }
}

module.exports = AddProduct;