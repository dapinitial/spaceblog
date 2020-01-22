const express = require('express');
const router = express.Router();
const {create, getBlogs} = require('../controllers/blog');
const {requireSignin, adminMiddleware} = require('../controllers/auth');

router.post('/blog', requireSignin, adminMiddleware, create);

module.exports = router;