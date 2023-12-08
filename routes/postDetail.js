const express = require('express');
const router = express.Router();
const { Post } = require('../models');

// 특정 게시물 조회
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const posts = await Post.findByPk(id);

    if (!posts) {
      return res.status(404).send('Post not found');
    }

    res.render('postDetail', { title: 'Post Detail', notes: posts });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 게시물 삭제
router.delete('/:postId', async (req, res, next) => {
  const { postId } = req.params;
  try {
    await Post.destroy({ where: { id: postId }});
    console.log('게시물 삭제 성공');
    res.sendStatus(200);
  } catch(error) {
    console.error(error);
    res.sendStatus(500); 
    next(error);
  }
});


module.exports = router;