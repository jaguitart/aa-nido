const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth')
const { Image, Location } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


// GET IMAGES
router.get('', asyncHandler(async (req, res) => {
  const images = await Image.findAll({
    include: [{ model: Location }]
  })
  res.json(images)
}));

// ADD/POST IMAGES
const validateImage = [
  check('imageTitle')
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 200 })
    .withMessage('Please provide a title.'),
  check('imageUrl')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a url.'),
  //se puede checkea si url es valido?
  check('imageBody')
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 5000 })
    .withMessage('Please provide a valid email or username.'),
  handleValidationErrors
];

router.post('/add', validateImage, requireAuth, asyncHandler(async (req, res) => {
  const { imageUrl, imageTitle, imageBody, locationId, albumId } = req.body
  //if de la validacion
  const newBird = await Image.create({
    userId: req.body.userId,
    imageUrl,
    imageTitle,
    imageBody,
    locationId,
    albumId
  })
  return res.json(newBird)
}));

// EDIT/PUT IMAGES
//revisar que entrega el req.body para armar el res.json
router.put('/:id(\\d+)/edit', validateImage, requireAuth, asyncHandler(async (req, res) => {
  console.log(req.body)
}));


module.exports = router;