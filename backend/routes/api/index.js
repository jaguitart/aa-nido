const router = require('express').Router();
const sessionRouter = require('./session.js');
const imagesRouter = require('./images.js');
const locationsRouter = require('./locations.js');
const usersRouter = require('./users.js');
const commentsRouter = require('./comments.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/images', imagesRouter);

router.use('/locations', locationsRouter);

router.use('/comments', commentsRouter);

module.exports = router;