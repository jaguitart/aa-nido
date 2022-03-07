const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3");
const { Image, Location, User } = require('../../db/models');

// GET IMAGES
router.get('', asyncHandler(async (req, res) => {
  const images = await Image.findAll({
    order: [],
    include: [{ model: Location }, { model: User }],
  })
  return res.json(images)
}));

// ADD/POST IMAGES
// check('imageUrl')
//   .isURL({ require_protocol: false, require_host: false })
//   .withMessage('Please provide a valid Url.'),

const validateImage = [
  check('imageTitle')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a bird name.')
    .isLength({ max: 200 })
    .withMessage('Bird name with max length 200 characters.'),
  check('imageBody')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid bird description.')
    .isLength({ max: 5000 })
    .withMessage('Please provide a valid bird description with max length 5000 characters.'),
  check('locationId')
    .isInt({ min: 1 })
    .withMessage('Please select a country.'),
  handleValidationErrors
];

router.post(
  '/add',
  singleMulterUpload("imageUrl"),
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, imageTitle, imageBody, locationId, albumId } = req.body
    const imageUrl = await singlePublicFileUpload(req.file);
    const newBird = await Image.create({
      userId,
      imageUrl,
      imageTitle,
      imageBody,
      locationId,
      albumId
    })
    return res.json({ newBird })
  }));

// EDIT/PUT IMAGES
const validateEdit = [
  check('imageTitle')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a bird name.')
    .isLength({ max: 200 })
    .withMessage('Bird name with max length 200 characters.'),
  check('imageBody')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid bird description.')
    .isLength({ max: 5000 })
    .withMessage('Please provide a valid bird description with max length 5000 characters.'),
  check('locationId')
    .isInt({ min: 1 })
    .withMessage('Please select a country.'),
  handleValidationErrors
];


router.put('/:id/edit', validateEdit, requireAuth, asyncHandler(async (req, res) => {
  const { imageTitle, imageBody, locationId } = req.body;
  const { id } = req.params;
  const editImage = await Image.findByPk(id)

  await editImage.update({
    imageTitle,
    imageBody,
    locationId
  })
  const editedImage = await Image.findByPk(id);
  return res.json(editedImage)
}));


//DELETE
router.delete('/:id/delete', requireAuth, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleteImage = await Image.findByPk(id);
  deleteImage.destroy();
  return res.json(deleteImage);
}));


module.exports = router;