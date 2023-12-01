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
  res.render('post', { message: req.body.message });
};

exports.handlePostForm = (req, res, next) => {
  res.redirect(`/post?message=Post successfully created!`)
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