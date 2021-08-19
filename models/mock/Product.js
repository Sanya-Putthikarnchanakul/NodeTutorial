let products = [];

class Product {
    constructor (productName, totalPrice, discount) {
        this.productName = productName;
        this.totalPrice = totalPrice;
        this.discount = discount;
    }

    addProduct () {
        try {
            products.push(this);
        } catch (err) {
            throw err;
        }
    }

    static getAllProduct () {
        try {
            return products;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Product;