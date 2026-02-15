import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/user/router/router.js";
dotenv.config()
let app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/user", router);
app.get("/", (req,res)=>{
    res.send("google keep")
})
let port = process.env.PORT || 8011;
app.listen(port, ()=>{
    console.log("connections ");
})