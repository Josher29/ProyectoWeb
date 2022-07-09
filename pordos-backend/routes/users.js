const express = require("express");

const {loginUser,createUser} = require("../controllers/users");


const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(createUser);

module.exports = router;