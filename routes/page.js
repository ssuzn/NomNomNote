const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { renderPostDetail, renderEditPost, renderBoard, renderPost, renderContact, renderLogin, renderJoin, renderProfile, renderMain } = require('../controllers/page');

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get('/postDetail', isLoggedIn, renderPostDetail);
router.get('/editPost', isLoggedIn, renderEditPost);
router.get('/board', isLoggedIn, renderBoard);
router.get('/post', isLoggedIn, renderPost);
router.get('/contact', renderContact);
router.get('/login', isNotLoggedIn, renderLogin);
router.get('/profile', isLoggedIn, renderProfile); 
router.get('/join', isNotLoggedIn, renderJoin); 
router.get('/', renderMain); 


module.exports = router;