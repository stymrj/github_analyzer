const express = require("express");

const router = express.Router();

const {
  analyzeProfile
} = require("../controller/profileController");

router.get("/:username", analyzeProfile);

module.exports = router;