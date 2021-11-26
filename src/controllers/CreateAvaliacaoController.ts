import { Request,Response } from 'express';
import {CreateAvaliacaoService} from '../services/CreateAvaliacaoService';

class CreateAvaliacaoController{
    async handle(request: Request, response:Response){
        const {
            supplier_id,
            merchant_id,
            comment,
            nota,
            type
        } = request.body

        const createAvaliacaoService = new CreateAvaliacaoService();

        const avaliacao = await createAvaliacaoService.execute({
            supplier_id,
            merchant_id,
            comment,
            nota,
            type
        })

        return response.json(avaliacao);

    }

    
}

export { CreateAvaliacaoController}