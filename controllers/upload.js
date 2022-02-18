//const { storage } = require('../firebase-setup');
const { getStorage } = require('firebase-admin/storage');

exports.getUploadImage = (req, res, next) => {
    try {
        res.render('upload/upload-image');
    } catch (e) {
        console.log(e);
    }
}

exports.postUploadImage = async (req, res, next) => {
    try {
        let file = req.file;

        let storage = getStorage();

        await storage.bucket('ped-test-bucket').file(file.originalname).save(file.buffer);
    } catch (e) {
        console.log(e);
    }
}