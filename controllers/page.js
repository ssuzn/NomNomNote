const { User, Post } = require('../models');

// exports.renderPost = async (req, res, next) => {
//   try {
//     const posts = await Post.findAll({
//       include: {
//         model: User,
//         attributes: ['id', 'nick'],
//       },
//       order: [['createdAt', 'DESC']],
//     });
//     res.render('post', {
//       notes: posts,
//     });
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// };

exports.renderPost = (req, res, next) => {
  res.render('post');
}

exports.renderContact = (req, res, next) => {
  res.render('contact');
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
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'],
      },
      order: [['createdAt', 'DESC']],
    });
    res.render('main', {
      title: 'NomNomNote',
      posts: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};