exports.renderPost = (req, res, next) => {
  res.render('post');
};

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

exports.renderMain = (req, res, next) => {
  res.render('main', {
    title: 'NomNomNote',
    posts: [],
  });
};