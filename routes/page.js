const express = require('express');
const router = express.Router();
const { renderJoin, renderProfile, renderMain } = require('../controllers/page');

router.use((req, res, next) => {
  res.locals.user = null;
  next();
});

router.get('/profile', renderProfile) // profile page
router.get('/join', renderJoin); // join page
router.get('/', renderMain); // main page


module.exports = router;