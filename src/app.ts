import express from "express";
import morgan from "morgan";
import cors from "cors";

import userRouter from "./routes/user.routes";
import registerRouter from "./routes/auth.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(registerRouter);

export default app;
