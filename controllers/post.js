const { Post } = require('../models');

// 클라이언트에서 이미지 업로드하면 호출
// 업로드된 이미지 파일명 기반으로 이미지 url 생성
exports.afterUploadImage = (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
};

// 게시물 작성 시 호출
// 데이터베이스에 새 게시물 생성
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
    
  } catch (error) {
    console.error(error);
    next(error);
  }
};
