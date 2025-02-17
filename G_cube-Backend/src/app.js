import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { upload } from "./middlewares/multer.middleware.js"; // Importing the multer middleware

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser()); //put for future use. not required now
/*app.use((req, res, next) => {
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);
    next();
<<<<<<< HEAD
});     */

import queryRouter from "./routers/query.router.js";
import answerRouter from "./routers/answer.router.js";
import userRouter from "./routers/user.router.js"

app.use("/api/v1/user",upload.none(),userRouter);
app.use("/api/v1/answer",upload.none(),answerRouter);
app.use("/api/v1/query",upload.none(), queryRouter);

export { app };
