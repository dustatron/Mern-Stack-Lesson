const express = require("express");
const router = express.Router();

// @route   GET api/Profile
// @Desc    Test route
// @access  Public

router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
