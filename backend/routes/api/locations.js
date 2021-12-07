const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Location } = require('../../db/models');


// GET LOCATIONS
router.get('', asyncHandler(async (req, res) => {
  const locations = await Location.findAll()
  res.json(locations)
}));


module.exports = router;