const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares');
const { Post } = require('../models');

router.get('/:id/editPost', isLoggedIn, async (req, res, next) => {
  const { id } = req.params;
  try {
    const posts = await Post.findByPk(id);

    if (!posts) {
      return res.status(404).send('Post not found');
    }

    res.render('editPost', { title: 'edit Post', notes: posts });
  } catch (error) {
    console.error(error);
    next(error);
  }
});


router.put('/:id/editPost', isLoggedIn, async (req, res, next) => {
  const { id } = req.params;
  try {
    // 게시물 정보를 수정하는 로직
    await Post.update({
      content: req.body.content,
      img: req.body.url,
      restaurantName: req.body.restaurantName,
      location: req.body.location,
      category: req.body.category,
      rating: req.body.rating,
    }, {
      where: {
        id: id,
      },
    });
// 수정 성공 시 JSON 응답
    res.json({ success: true, message: 'Post successfully updated!' });
  } catch (error) {
    console.error(error);
    next(error);
  }
});



module.exports = router;
