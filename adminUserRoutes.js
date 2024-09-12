const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/getusers',adminController.getUsers);


router.put('/updateusers/:id',  adminController.updateUser);


router.delete('/deleteusers/:id', adminController.deleteUser);

module.exports = router;
