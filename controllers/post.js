const { Post } = require('../models');

exports.afterUploadImage = (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
};

exports.uploadPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      restaurantName: req.body.restaurantName,
      location: req.body.location,
      category: req.body.category,
      rating: req.body.rating,
      UserId: req.user.id,
    });
    
    res.render('main', {
      title: 'NomNomNote',
      message: '게시물이 성공적으로 작성되었습니다.',
    });
    
  } catch (error) {
    console.error(error);
    next(error);
  }
};