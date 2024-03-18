import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db";
import bodyParser from "body-parser";
import dishRouter from "./routes/dish.router";
import session from "express-session";
import userRouter from "./routes/user.router";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "sessions",
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
    },
  })
);

app.use("/api/login", userRouter);

app.use("/api/dish", dishRouter);

app.use((req: Request, res: Response) => {
  res.status(200).json({ error: "Endpoint not found" });
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

declare module "express-session" {
  export interface SessionData {
    user: any;
  }
}
