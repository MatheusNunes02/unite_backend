import { Request,Response } from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';

class CreateCategoryController{
    async handle(request: Request, response:Response){

        const {category_name} = request.body;


        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({
           category_name 
        })

        return response.json(category)
    }
}

 export { CreateCategoryController }