const express = require('express');
const { renderContact, handleContactForm } = require('../controllers/page');
const router = express.Router();

// GET /contact
router.get('/', renderContact);

// POST /contact
router.post('/', handleContactForm);

module.exports = router;