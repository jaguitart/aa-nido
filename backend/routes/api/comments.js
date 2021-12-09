const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Comment } = require('../../db/models');
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

// GET COMMENTS
router.get('', asyncHandler(async (req, res) => {
  const comments = await Comment.findAll()
  res.json(comments)
}));

// ADD/POST COMMENT
const validateComment = [
  check('commentHeader')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a comment header.')
    .isLength({ min: 1, max: 300 })
    .withMessage('Please provide a comment with a length between 1 to 300 characters.'),
  check('commentBody')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a comment body.'),
  handleValidationErrors
];

router.post('/:id/addComment', validateComment, requireAuth, asyncHandler(async (req, res) => {
  const { userId, imageId, commentHeader, commentBody } = req.body;
  const newComment = await Comment.create({
    userId,
    imageId,
    commentHeader,
    commentBody
  });
  return res.json(newComment);
}));


module.exports = router;