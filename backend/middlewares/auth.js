const UserModel = require("../models/userModel")
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = require("../../config.js");

function userMiddleware(req, res, next){
    const token = req.headers.authorization;
    try{
        const verifiedInfo = jwt.verify(token, JWT_USER_PASSWORD);
        req.id = verifiedInfo.id;
        next();
    }catch(err){
        return res.status(403).json({
            msg: "invalid token"
        })
    }
}

module.exports = {
    userMiddleware
}