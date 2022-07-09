const express = require("express");

const {getAllThemes,createTheme} = require("../controllers/themes");


const router = express.Router();

router.route("/themes").get(getAllThemes);
router.route("/themes").post(createTheme);

module.exports = router;