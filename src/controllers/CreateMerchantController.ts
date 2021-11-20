import { Request,Response } from 'express';

import {CreateMerchantService} from './../services/CreateMerchantService';


class CreateMerchantController{
    async handle(request: Request, response: Response){
        const {
            name,
            cpf,
            email,
            password,
            cep,
            bairro,
            endereco,
            sobre_mim,
            telefone,
            status,
        } = request.body

        const createMerchantService = new CreateMerchantService();

        const foto = './uploads/'+request.file?.filename;

        const merchant = await createMerchantService.execute({
            name,
            cpf,
            email,
            password,
            cep,
            foto,
            bairro,
            endereco,
            sobre_mim,
            telefone,
            status
        })

        return response.json(merchant);
    }
}

export { CreateMerchantController}