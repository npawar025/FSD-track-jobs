import express from "express";
import { register, login, updateUser } from "../controllers/auth.js";
import authenticateUser from "../middleware/authentication.js";
import testUser from "../middleware/testUser.js";
import rateLimiter from "express-rate-limit";

const router = express.Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: {
    msg: "Too many requests from this IP, please try again after 15 minutes",
  },
});

router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.patch("/updateUser", authenticateUser, testUser, updateUser);

export default router;
