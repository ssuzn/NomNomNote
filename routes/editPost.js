const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares');
const { updatePost, deletePost } = require('../controllers/board');
const { renderEditPost } = require('../controllers/page');
const { Post } = require('../models');


// 특정 게시물 조회
router.get('/:postId', renderEditPost);

// 게시물 수정
router.put('/:postId', updatePost);


module.exports = router;
