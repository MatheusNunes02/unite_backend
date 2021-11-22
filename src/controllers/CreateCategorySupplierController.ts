import { Request,Response } from 'express';
import { CreateCategorySupplierService } from '../services/CreateCategorySupplierService';


class CreateCategorySupplierController{
    async handle(request: Request, response: Response){
        const {category_id,supplier_id,status} = request.body
        
        const createCategorySupplierService = new CreateCategorySupplierService();

        const CategorySupplier = await createCategorySupplierService.execute({
            category_id,
            supplier_id,
            status
        })

        return response.json(CategorySupplier)
    }

}

export { CreateCategorySupplierController }