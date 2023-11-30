const express = require('express');
const { renderContact, handleContactForm } = require('../controllers/page');
const router = express.Router();
const { isLoggedIn } = require('../middlewares');

// GET /contact
router.get('/', renderContact);

// POST /contact
router.post('/', handleContactForm);

module.exports = router;