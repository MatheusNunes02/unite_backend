import { getCustomRepository } from "typeorm";
import { MerchantRepositories } from "../repositories/MerchantRepositories";
import { SupplierRepositories } from "../repositories/SupplierRepositories";
import { Merchant } from "../entities/Merchant";
import { Supplier } from "../entities/Supplier";
import { verify } from "jsonwebtoken";

interface IHeaderRequest {
  email: string;
  token: string;
}

interface IPayLoad {
  sub: string;
}

class ValidateTokenService {
  async execute({ email, token }: IHeaderRequest) {
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
      throw new Error("Usuário não está cadastrado, acesso não permitido");
    }

    try {
      const { sub } = verify(
        token,
        "2a9bd0ff57f6d7242eaf60237b3b0179"
      ) as IPayLoad;

      return true;
    } catch (err) {
      return false;
    }
  }
}

export { ValidateTokenService };
