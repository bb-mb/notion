import express from "express";
import cors from "cors";

import { authRouter, pageRouter, userRouter } from "@/routes";
import "@/setting";

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/page", pageRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Server listening on port :", PORT);
});
