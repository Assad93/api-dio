import express, { Request, Response } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(5000, () =>
  console.log("Server is running in port 5000: http://localhost:5000/")
);
