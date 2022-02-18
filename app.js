const express = require('express');

const { firebaseSetup } = require('./firebase-setup');

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

const uploadRoute = require('./routes/upload');

app.use('/upload', uploadRoute);

app.listen(3000, () => {
    firebaseSetup();
    console.log(`Server Started @ ${new Date()}`);
});
