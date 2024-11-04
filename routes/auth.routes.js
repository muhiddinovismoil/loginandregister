import { Router } from "express";
import { getLoginController, getRegisterController, loginController, registerController } from "../controllers/index.js";
export const router = Router()
router.post("/register",registerController)
router.get("/register",getRegisterController)
router.post("/login",loginController)
router.get("/login",getLoginController)
router.get("/home",)