exports.renderProfile = (req, res, next) => {
  res.render('profile');
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