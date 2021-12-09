import { Request, Response } from "express";

import { ValidateTokenService } from "../services/ValidateTokenService";

class ValidateTokenController {
  async handle(request: Request, response: Response) {
    const validateTokenService = new ValidateTokenService();

    const { email, token } = request.body;

    const result = await validateTokenService.execute({ email, token });

    return response.json(result);
  }
}

export { ValidateTokenController };
