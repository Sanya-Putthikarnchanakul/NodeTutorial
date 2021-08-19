//#region 3rd Package

const express = require('express');

//#endregion

const app = express();
app.set('view engine', 'ejs');

//#region Midleware

app.use(express.urlencoded({ extended: false }));

//#endregion

//#region Routes



//#endregion

app.listen(3000, () => {
    console.log(`Server Started @ ${new Date()}`);
});
