import { Request, Response } from "express";

export class CreateUserController {
  handle(request: Request, response: Response) {
    return response.json([{ name: "jhon don" }, { name: "jane doe" }]);
  }
}
