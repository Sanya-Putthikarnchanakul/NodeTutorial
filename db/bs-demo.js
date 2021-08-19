const mode = 'MOCK';

const checkIsMockMode = () => {
    try {
        if (mode === 'MOCK') return true;

        return false;
    } catch (err) {
        throw err;
    }
}

const Product = require('../models/mock/Product');
exports.getAllProducts = () => {
    try {
        if (checkIsMockMode()) {
            return Product.getAllProduct();
        }
    } catch (err) {
        throw err;
    }
}