const { signup, login } = require('../controllers/user.js');
const { addExpense, getAllExpenses, deleteExpense, updateExpense } = require('../controllers/expense');
const { verifyLogin } = require('../middleware/verifylogin');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const { uploader } = require('../controllers/user');
router.post('/signup', uploader.single("image"), signup);
router.get('/login', login);
router.post('/addexpense', verifyLogin, addExpense);
router.get('/getallexpense', verifyLogin, getAllExpenses);
router.delete('/delete', verifyLogin, deleteExpense)
router.put('/update', verifyLogin, updateExpense)
module.exports = router;