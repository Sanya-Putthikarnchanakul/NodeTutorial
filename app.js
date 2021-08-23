const path = require('path');

const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');

const app = express();
const MONGODB_URI = 'mongodb://localhost:27017/gentelella';

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'Sanya Putthikarnchanakul',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    },
    store: new MongoDBStore({
        uri: MONGODB_URI,
        collection: 'sessions',
        expires: 1000 * 60 * 60
    })
}));

const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const apiRoutes = require('./routes/apis');

app.use(indexRoutes);
app.use('/users', usersRoutes);
app.use('/api', apiRoutes);
app.use((err, req, res, next) => {
	if (err) {
        if (!err.statusCode) err.statusCode = 500;
        
        res.render(
            'errors/all-error',
            {
                title: err.statusCode,
                err: err
            }
        );           
    }
});

const runApp = async () => {
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server Started @ ${new Date()}`);
        });
    } catch (err) {
        throw err;
    }
};

runApp();



