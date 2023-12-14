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

