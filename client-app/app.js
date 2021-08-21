const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

const indexRoutes = require('./routes/index');
app.use(indexRoutes);

app.listen(3000, () => {
    console.log(`Server Started @ ${new Date()}`);
});
