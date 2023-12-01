const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { renderBoard, renderPost, renderContact, renderLogin, renderJoin, renderProfile, renderMain } = require('../controllers/page');

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get('/post', renderPost);
router.get('/contact', renderContact);
router.get('/login', isNotLoggedIn, renderLogin);
router.get('/profile', isLoggedIn, renderProfile); 
router.get('/join', isNotLoggedIn, renderJoin); 
router.get('/', renderMain); 


module.exports = router;