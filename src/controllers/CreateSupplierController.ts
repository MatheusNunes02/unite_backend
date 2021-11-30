import { Request,Response } from 'express';

import { CreateSupplierService } from '../services/CreateSupplierService';


class CreateSupplierController{
    async handle(
        request: Request,
        response: Response
    ){
        const {
            nome_empresa,
            email,
            cnpj,
            status,
            descricao,
            cep,
            endereco,
            bairro,
            numero_endereco,
            password,
            telefone
        } = request.body;

        const createSupplierService = new CreateSupplierService();

        const foto = ''+request.file?.filename;

        const supplier = await createSupplierService.execute({
            nome_empresa,
            email,
            cnpj,
            status,
            descricao,
            foto,
            cep,
            endereco,
            bairro,
            numero_endereco,
            password,
            telefone
        })

        return response.json(supplier);

    }
}

export {CreateSupplierController}