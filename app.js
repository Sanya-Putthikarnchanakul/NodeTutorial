const path = require('path');

const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const errorsRoutes = require('./routes/errors');

app.use(indexRoutes);
app.use('/users', usersRoutes);
app.use('/errors', errorsRoutes);

app.listen(3000, () => {
    console.log(`Server Started @ ${new Date()}`);
});
