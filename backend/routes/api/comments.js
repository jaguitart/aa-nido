const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Comment, User } = require('../../db/models');
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

// GET COMMENTS
router.get('', asyncHandler(async (req, res) => {
  const comments = await Comment.findAll(({
    include: [{ model: User }]
  }))
  await res.json(comments)
}));

// ADD/POST COMMENT
const validateComment = [
  check('commentHeader')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a comment title.')
    .isLength({ max: 300 })
    .withMessage('Please provide a comment with max length 300 characters.'),
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

// // EDIT/PUT COMMENTS
// router.put('/:id/addComment/:commentId/edit', validateComment, requireAuth, asyncHandler(async (req, res) => {
//   const { imageTitle, imageBody, locationId } = req.body;
//   const { commentId } = req.params;
//   const editComment = await Comment.findByPk(commentId)
//   //agregar la validacion
//   await editComment.update({
//     userId,
//     imageId,
//     commentHeader,
//     commentBody
//   })
//   const editComment = await Comment.findByPk(commentId);
//   return res.json()
// }));


// //DELETE COMMENTS
router.delete('/:commentId/delete', requireAuth, asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const deleteComment = await Comment.findByPk(commentId);
  deleteComment.destroy();
  return res.json(deleteComment);
}));



module.exports = router;