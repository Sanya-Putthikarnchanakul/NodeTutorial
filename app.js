//#region Core Package

const path = require('path');

//#endregion

//#region 3rd Package

const express = require('express');

//#endregion

const app = express();
app.set('view engine', 'ejs');

//#region Midleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//#endregion

//#region Routes

app.get('/', (req, res) => {
    res.render(
        'index',
        {
            title: 'Dashboard',
            path: '/'
        }
    );
});

const bsDemoRoute = require('./routes/bs-demo');
app.use('/bs-demo', bsDemoRoute);

const Result = require('./models/mock/Response/Result');
const Product = require('./models/mock/Product');
const AddProduct = require('./models/mock/Response/AddProduct');
app.post('/api/add-product', (req, res, next) => {
    try {
        const productName = req.body.productName;
        const totalPrice = req.body.totalPrice;
        const discount = req.body.discount;
        
        const product = new Product(productName, totalPrice, discount);
        product.addProduct();

        const responseObj = new AddProduct(new Result(false, "0000", null), product);

        return res.json(responseObj);
    } catch (err) {
        return res.status(500).json(new Result(true, "9999", err.message));
    }   
});

//#endregion

app.listen(3000, () => {
    console.log(`Server Started @ ${new Date()}`);
});
