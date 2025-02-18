import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { upload } from "./middlewares/multer.middleware.js"; // Importing the multer middleware

const app = express();
const corsOption={
    origin: process.env.CORS_ORIGIN,//['https://gcube-pes.vercel.app', 'http://localhost:3000'],
    methods:'GET,PUT,POST,DELETE',
    allowedHeaders:'Content-Type,Authorization',
    credentials: true,
    preflightContinue:true
}
app.use(cors(corsOption));
app.options('*',cors(corsOption));
// app.use((req, res, next) => {
//     if (req.headers["x-forwarded-proto"] !== "https") {
//         return res.redirect(`https://${req.headers.host}${req.url}`);
//     }
//     next();
// });

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
