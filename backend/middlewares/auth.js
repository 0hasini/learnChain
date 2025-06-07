import { UserModel } from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import { JWT_USER_SECRET } from "../config.js";

function userMiddleware(req, res, next){
    const token = req.headers.authorization;
    try{
        const verifiedInfo = jwt.verify(token, JWT_USER_SECRET);
        req.id = verifiedInfo.id;
        next();
    }catch(err){
        return res.status(403).json({
            msg: "invalid token"
        })
    }
}

export {
    userMiddleware
};