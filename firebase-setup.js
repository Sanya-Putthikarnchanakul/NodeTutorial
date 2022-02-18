const { initializeApp, cert } = require('firebase-admin/app');
//const { getStorage } = require('firebase-admin/storage');
const serviceAccount = require('./upload-demo-abd2a-firebase-adminsdk-xwgrc-f4cbf6697f.json');

//let storage;

const firebaseSetup = () => {
    initializeApp({
        credential: cert(serviceAccount),
        storageBucket: 'ped-test-bucket.appspot.com'
    });

    //storage = getStorage();
}

module.exports = { firebaseSetup/*, storage*/ };