const express = require("express");

const {getPersonalPosts, getAllOpinions} = require("../controllers/opinions");


const router = express.Router();

//router.route("/profile").get(getPersonalOpinions);
router.route("/feed").get(getAllOpinions);


module.exports = router;