import { getCustomRepository } from "typeorm";
import { MerchantRepositories } from "../repositories/MerchantRepositories";

class ListMerchantService {
  async execute() {
    const merchantRepositories = getCustomRepository(MerchantRepositories);

    const merchants = await merchantRepositories.find();

    return merchants;
  }
}

export { ListMerchantService };
