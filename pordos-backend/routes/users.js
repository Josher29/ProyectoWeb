const express = require("express");

const loginUser = require("../controllers/users");


const router = express.Router();

router.route("/login").post(loginUser);

module.exports = router;