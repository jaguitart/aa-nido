const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Image, Location } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


// GET IMAGES
router.get('', asyncHandler(async(req, res) => {
  const images = await Image.findAll({
    include: [{ model: Location }]
  })
  res.json(images)
}));



module.exports = router;