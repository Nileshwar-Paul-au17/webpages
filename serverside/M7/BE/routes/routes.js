const {signup,login} = require('../controllers/user.js');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const {uploader} =require('../controllers/user');
router.post('/submit', uploader.single("image"),signup);
router.get('/login',login);
module.exports = router;