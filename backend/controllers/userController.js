import { UserModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_USER_SECRET } from "../config.js";
import z from "zod";

export const signup = async (req, res) => {
    const requiredBody = z.object({
        email: z.string({
            required_error: "email is required",
            invalid_type_error: "invalid email" 
        }).min(3).max(30).email(),
        password: z.string().min(6).max(30),
        studentId: z.int().min(9).max(12),
        role: z.string()
    })

    const parsedData = requiredBody.safeParse(req.body);
    if(!parsedData.success){
        return res.status(403).json({
            msg: "invalid format",
            error: parsedData.error
        })
    }

    const {email, password, studentId, role} = req.body;

    try{
        const user = await UserModel.findOne({
            email: email
        })
        if(user){
            return res.status(403).json({
                msg: "user already exists"
            })
        }else{
            const hashedPassword = await bcrypt.hash(password, 5);
            UserModel.create({
            email,
            password: hashedPassword,
            Fname,
            Lname
            })
            return res.json({
                msg: "user has signed up"
            })
        }
    }catch(err){
        console.error("Login error:", error);
        res.status(500).json({
            msg: "failed to signup"
        });
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    
    try{
        const user = await UserModel.findOne({
            email: email
        })
        if(user){
            const passwordEntered = await bcrypt.compare(password,user.password);
            if(passwordEntered){
                const token = jwt.sign({
                    // email: email     better to encode the id
                    id: user._id
                }, JWT_USER_SECRET);
                return res.json({
                    msg: "user has signed in",
                    token: token
                })
            }
            else{
                return res.status(403).json({
                    msg: "invalid password"
                })
            }
        }
        else{
            return res.status(403).json({
                msg: "email not found"
            })
        }
    }catch(error){
        console.error("Login error:", error);
        res.status(500).json({
            msg: "Failed to sign in"
        });
    }
}; 
