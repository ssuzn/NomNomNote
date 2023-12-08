const { User, Post } = require('../models');

// 전체 게시물 목록 조회
exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'],
      },
        order: [['createdAt', 'DESC']], 
      });
      res.render('board', { 
        title: 'Board', 
        notes: posts,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 특정 게시물 조회
exports.getPostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const posts = await Post.findByPk(id);
    if (!posts) {
      return res.status(404).send('Post not found');
    }
    res.render('editPost', { title: 'Post Detail', notes: posts });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시물 수정
exports.updatePost = async (req, res, next) => {
  const postId = req.params.id;
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
        id: postId,
        UserId: req.user.id, // 현재 로그인한 사용자의 게시물인지 확인
      },
    });

    // 수정 성공 시 리다이렉트 또는 응답
    res.redirect('/board');
  } catch (error) {
    console.error(error);
    next(error);
  }
};
