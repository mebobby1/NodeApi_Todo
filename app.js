import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env"
})

//Middleware for accessing data from form :- app.use(urlencoded: {extended: true }) but now we access data from json in postman so we use middleware

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST","PUT", "DELETE"],
    credentials: true,
}))

//Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

// This is dynamic Routing so keep this dynamic routing in last because if we put this above then it shows error like above example because it treat special in id format 

// Error Middleware

app.use(ErrorMiddleware)



