import express, { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) =>
  response.json({ message: "Welcome to api-dio" })
);

app.listen(5000, () =>
  console.log("Server is running in port 5000: http://localhost:5000/")
);
