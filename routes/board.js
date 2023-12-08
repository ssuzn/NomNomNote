const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares');
const { getAllPosts, getPostById } = require('../controllers/board');

// 전체 게시물 목록 조회
router.get('/', getAllPosts);

// 특정 게시물 조회
router.get('/:id', getPostById);

module.exports = router;
