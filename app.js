const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

const { uploadFile, getFileStream } = require('./s3');
app.post('/', upload.single('image'), async (req, res) => {
    const file = req.file;
    const description = req.body.description;

    const result = await uploadFile(file);
    console.log(result);

    res.send({ imagePath: `/images/${result.Key}` });
});

app.get('/images/:key', (req, res) => {
    const key = req.params.key;

    const readStream = getFileStream(key);

    readStream.pipe(res);
});

app.get('/next', (req, res) => {
    res.render('next');
});

app.listen(3000, () => {
    console.log(`Server Started @ ${new Date()}`);
});
