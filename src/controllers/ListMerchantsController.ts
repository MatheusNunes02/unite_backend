import { Request, Response } from 'express';

import { ListMerchantService } from '../services/ListMerchantService';

class ListMerchantController{
    async handle(request:Request,response:Response){
        const listMerchantService = new ListMerchantService()
        
        const merchants = await listMerchantService.execute();

        return response.json(merchants);
    }
}

export {ListMerchantController}