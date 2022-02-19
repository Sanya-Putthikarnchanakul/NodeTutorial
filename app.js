const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
	uri: 'mongodb://localhost:27017/express-session-demo',
	collection: 'sessions'
});

const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(
	session({
		secret: 'my secret',
		resave: false,
		saveUninitialized: false,
		store: store
	})
);

app.get('/', (req, res) => res.render('index'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));

app.post('/login', async (req, res) => {

    const user = await User.findOne({ username: req.body.username, password: req.body.password });

    /*if (user) {
        req.session.isLoggedIn = true;
        req.session.user = { username: req.body.username, password: req.body.password };
        req.session.save(err => {
            if (err) console.log(err);
            res.redirect('/');
        });
    }*/

    if (user) {
        res.redirect('/');
    }
});

app.post('/register', async (req, res) => {

    await User.create({ username: req.body.username, password: req.body.password });

    res.redirect('/login');
});

app.listen(3001, () => {
    mongoose.connect('mongodb://localhost:27017/express-session-demo');
    console.log(`Server Started @ ${new Date()}`);
});
