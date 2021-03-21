import { Request, response, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = <{ user_id: string }>request.headers;

      const all = this.listAllUsersUseCase.execute({ user_id });

      return response.json(all);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
    return response.status(404);
  }
}

export { ListAllUsersController };
