const express = require("express");

const {getPersonalPosts} = require("../controllers/opinions");


const router = express.Router();

router.route("/profile").get(getPersonalOpinions);


module.exports = router;