import { getCustomRepository } from "typeorm";
import { CategoryRepositories} from '../repositories/CategoryRepositories';

interface ICategoryRequest{
    category_name: string;
}

class CreateCategoryService {
    async execute({category_name}:ICategoryRequest){
        const categoryRepositories = getCustomRepository(CategoryRepositories)

        const CategoryAlreadyExists = await categoryRepositories.findOne({
            category_name
        })

        if(!category_name || CategoryAlreadyExists){
            throw new Error('Categoria inválida ou já existe.')
        }

        const category = categoryRepositories.create({
            category_name
        })

        await categoryRepositories.save(category)

        return category
    }
}

export {CreateCategoryService}