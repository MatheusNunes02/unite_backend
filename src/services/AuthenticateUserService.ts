import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { MerchantRepositories } from "../repositories/MerchantRepositories";
import { SupplierRepositories } from "../repositories/SupplierRepositories";
import { Merchant } from "../entities/Merchant";
import { Supplier } from "../entities/Supplier";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const merchantRepositories = getCustomRepository(MerchantRepositories);
    const supplierRepositories = getCustomRepository(SupplierRepositories);

    const merchant = await merchantRepositories.findOne({
      email,
    });

    const supplier = await supplierRepositories.findOne({
      email,
    });

    let user: Merchant | Supplier | null = null;

    if (merchant) {
      user = merchant;
    }

    if (supplier) {
      user = supplier;
    }

    if (!user) {
      throw new Error("User not found");
    }

    const passwordmatch = await compare(password, user?.password);

    if (!passwordmatch) {
      throw new Error("Invalid data");
    }

    //Gerando token com a chave em hashMD5
    //unitedemoday
    const token = sign(
      {
        email: user.email,
      },

      "2a9bd0ff57f6d7242eaf60237b3b0179",

      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return { id: user.id, email: user.email, token };
  }
}

export { AuthenticateUserService };
