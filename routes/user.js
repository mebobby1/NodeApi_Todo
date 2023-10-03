import { getMyProfile, login, logout, register } from "../controllers/user.js";

import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register );

router.post("/login", login );

router.get("/logout", logout );

router.get("/me", isAuthenticated ,getMyProfile );

export default router;


// Why we can't use app instead of router we can also export app then use app.get.. because we can add prefix in url for every route so we use router