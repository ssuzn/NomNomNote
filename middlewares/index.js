exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) { // passport 통해서 로그인 했는지
    next(); // 했으면 next
  } else {
    res.status(403).send('Login required');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent('Logged in');
    res.redirect(`/?error=${message}`);
  }
};