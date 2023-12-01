const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { afterUploadImage, uploadPost } = require('../controllers/post');
const { isLoggedIn } = require('../middlewares');
const { renderPost, handlePostForm } = require('../controllers/page');

const router = express.Router();

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) { // 저장되는 곳 지정
      cb(null, 'uploads/'); 
    },
    filename(req, file, cb) { // 저장되는 이름 지정
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});


// 이미지 업로드 처리
router.post('/img', isLoggedIn, upload.single('img'), afterUploadImage);

router.post('/', handlePostForm);

module.exports = router;