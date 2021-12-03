import { Response, Request } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const data = await authenticateUserService.execute({
      email,
      password,
    });

    console.log(request.headers);

    return response.json(data);
  }
}

export { AuthenticateUserController };
