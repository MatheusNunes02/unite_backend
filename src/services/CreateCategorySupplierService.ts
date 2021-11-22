import { getCustomRepository } from "typeorm";
import { CategorySupplierRepositories} from '../repositories/CategorySupplierRepositories';
import {} from '../repositories/CategoryRepositories';

interface ICategorySupplierRequest{
    category_id: string;
    supplier_id:string;
    status: Boolean;

}

class CreateCategorySupplierService{
    async execute({category_id,supplier_id,status=true}: ICategorySupplierRequest){
        const categorySupplierRepositories = getCustomRepository(CategorySupplierRepositories)

        const categoryAlreadyUsed = await categorySupplierRepositories.findOne({
            category_id,
            supplier_id,
        }) 

        if(categoryAlreadyUsed){
            throw new Error('Categoria já associada com um fornecedor');
        }

        const categorySupplier = categorySupplierRepositories.create({
            category_id,
            supplier_id,
            status
        })


        await categorySupplierRepositories.save(categorySupplier);

        return categorySupplier;
    }
}

export { CreateCategorySupplierService}