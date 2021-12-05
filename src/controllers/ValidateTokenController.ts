import { Request, Response } from "express";

import { ValidateTokenService } from "../services/ValidateTokenService";

class ValidateTokenController {
  async handle(request: Request, response: Response) {
    const validateTokenService = new ValidateTokenService();

    const { email, token } = request.body;

    console.log(email);
    console.log(token);

    const result = await validateTokenService.execute({ email, token });

    return response.json(result);
  }
}

export { ValidateTokenController };
