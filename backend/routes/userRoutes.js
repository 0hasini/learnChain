import express from 'express';
import { signin, signup } from "../controllers/userController.js";
import { userMiddleware } from "../middlewares/auth.js";
// import {userController} from '../controllers/userController.js';
const router = express.Router();

// Public routes
router.post("/signin", signin);
router.post("/signup", signup)

// Protected routes (require authentication)
// Add protected routes here using userMiddleware
// Example: router.get("/profile", userMiddleware, profileController);

export default router;