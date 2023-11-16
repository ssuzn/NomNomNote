const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { renderLogin, renderJoin, renderProfile, renderMain } = require('../controllers/page');

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get('/login', isNotLoggedIn, renderLogin)
router.get('/profile', isLoggedIn, renderProfile) // profile page
router.get('/join', isNotLoggedIn, renderJoin); // join page
router.get('/', renderMain); // main page


module.exports = router;