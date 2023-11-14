const express = require('express');
const { renderMain } = require('../controllers/page');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  next();
});

router.get('/', renderMain);

module.exports = router;