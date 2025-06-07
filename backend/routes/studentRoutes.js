const express = require("express");
const router = express.Router();
// const {UserModel} = require("../models/userModel"); //will retrive only students
const {userMiddleware} = require("../middlewares/auth");

// router.post