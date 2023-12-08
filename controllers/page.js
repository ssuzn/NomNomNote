const { User, Post } = require('../models');

exports.renderEditPost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const posts = await Post.findByPk(id);
    if (!posts) {
      return res.status(404).send('Post not found');
    }
    res.render('editPost', { title: 'Edit Post', notes: posts });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.renderPostDetail = async (req, res, next) => {
  const { id } = req.params.id;
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
};


exports.renderBoard = async (req, res, next) => {
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

exports.renderPost = (req, res, next) => {
  res.render('post', { message: req.body.message });
};

exports.renderContact = (req, res, next) => {
  res.render('contact', { message: req.body.message });
};

exports.handleContactForm = (req, res, next) => {
  const { name } = req.body;
  res.redirect(`/contact?message=Thank+you%2C+${name}%2C+for+your+message%21+We%27ll+get+back+to+you+soon.`)
};

exports.renderProfile = (req, res, next) => {
  res.render('profile');
};

exports.renderLogin = (req, res, next) => {
  res.render('login');
};

exports.renderJoin = (req, res, next) => {
  res.render('join');
};

exports.renderMain = async (req, res, next) => {
  try {
    res.render('main', {
      title: 'NomNomNote'
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};