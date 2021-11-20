import { getCustomRepository } from "typeorm";

import { MerchantRepositories } from "../repositories/MerchantRepositories";

import { hash } from "bcryptjs";

interface IMerchantRequest{
    name: string;
    cpf: string;
    email: string;
    password: string;
    foto:string;
    cep: string;
    bairro: string;
    endereco: string;
    sobre_mim: string;
    telefone: string;
    status: number;
}


class CreateMerchantService{

    async execute({
        name,
        cpf,
        email,
        password,
        cep,
        bairro,
        endereco,
        sobre_mim,
        telefone,
        status=200,
        foto
    }: IMerchantRequest){
        const merchantRepositories = getCustomRepository(MerchantRepositories);

        //Validar nome
        if(!name){
            throw new Error("Nome inválido");
        }

        //Validar Email
        if(!email){
            throw new Error("Email/Senha Incorreto");
        }
        
        if(!password){
            throw new Error("Email/Senha Incorreta")
        }

        if(!cpf){
            throw new Error("Cpf inválido");
        }


        //Validar se usuário já existe
        const merchantAlreadyExists = await merchantRepositories.findOne({
            email
        })

        if(merchantAlreadyExists){
            throw new Error("Email já cadastrado.");
        }

        if(!cep || !bairro || !endereco){
            throw new Error("Informações de localidade inválidas.");
        }
        
        if(!telefone){
            throw new Error("Telefone inválido");
        }

        const passwordHash = await hash(password,8);


        const merchant = merchantRepositories.create({
            name,
            cpf,
            email,
            cep,
            foto,
            bairro,
            endereco,
            sobre_mim,
            status,
            telefone,
            password: passwordHash
        })

        await merchantRepositories.save(merchant);


        return merchant;
    }
}

export { CreateMerchantService }