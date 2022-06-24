import { Request, Response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
const createUserController = new CreateUserController();

router.get("/", (request: Request, response: Response) =>
  response.json({ message: "Welcome to api-dio" })
);

router.get("/users", createUserController.handle);

export { router };
