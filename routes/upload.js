const express = require('express')
const multer  = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

const uploadController = require('../controllers/upload');

const router = express.Router();

router.get('/upload-image', uploadController.getUploadImage);
router.post('/upload-image', upload.single('image'), uploadController.postUploadImage);

module.exports = router;