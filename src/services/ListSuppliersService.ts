import { getCustomRepository } from "typeorm";
import { SupplierRepositories } from "../repositories/SupplierRepositories";

class ListSuppliersService{
  async execute(){
      const supplierRepositories = getCustomRepository(SupplierRepositories)
      
     const suppliers = await supplierRepositories.find()

     return suppliers
  }

}

export {ListSuppliersService}