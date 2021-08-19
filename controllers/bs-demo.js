const { getAllProducts } = require('../db/bs-demo');

exports.getShop = (req, res, next) => {
    try {
        const products = getAllProducts();

        return res.render(
            'shop',
            {
                title: 'Dashboard',
                path: '/bs-demo/shop',
                products: products
            }
        );
    } catch (err) {
        console.log(err);
    }
}