import express from "express";
import user from "..user.js";
import loging from "..loging.js";
import userupdate from "/mid/userupdate.js";
import usersignup from "../mid/service/";
import userslogin from "model/mid/loging.js";
let router=express.Router();
router.post("/signup", user, usersignup);
router.get("/login", usersloggin, userloggingservices )

export default router;