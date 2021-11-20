import { getCustomRepository } from 'typeorm';

import { SupplierRepositories } from '../repositories/SupplierRepositories';
import { MerchantRepositories} from '../repositories/MerchantRepositories';

import { hash } from "bcryptjs";

interface ISupplierRequest{
    nome_empresa:string;
    email: string;
    cnpj: string;
    status?: number;
    descricao: string;
    foto: string;
    cep: string;
    endereco: string;
    bairro: string;
    numero_endereco: string;
    password: string;
    telefone:string;
}

class CreateSupplierService{
    async execute(
        {
            nome_empresa,
            email,
            cnpj,
            status=200,
            descricao,
            foto,
            cep,
            endereco,
            bairro,
            numero_endereco,
            password,
            telefone
        }:ISupplierRequest){
            const supplierRepositories = getCustomRepository(SupplierRepositories);
            const merchantRepositories = getCustomRepository(MerchantRepositories);

            // Verificando emails e senha
            if(!email || !password){
                throw new Error("Email/Senha incorreto");
            }

            const supplierAlreadyExists = await supplierRepositories.findOne({
                email
            })

            const merchantEmailUsed = await merchantRepositories.findOne({
                email
            })

            if(supplierAlreadyExists || merchantEmailUsed){
                throw new Error("Usuário já existe");
            }

            if(!nome_empresa){
                throw new Error("Nome da empresa inválido");
            }

            //Verificando cnpj
            const cnpjAlreadyUsed = await supplierRepositories.findOne({
                cnpj
            })

            if(!cnpj || cnpjAlreadyUsed){
                throw new Error("Cnpj inválido");
            }
            

            

            if(!descricao){
                throw new Error("Descrição inválida");
            }

            if(!cep || !endereco || !bairro || !numero_endereco){
                throw new Error("Informações de localidade inválidas.");
            }

            const telefoneAlreadyExistsMerchant = await merchantRepositories.findOne({
                telefone
            })

            const telefoneAlreadyExists = await supplierRepositories.findOne({
                telefone
            })

            if(!telefone || telefoneAlreadyExistsMerchant || telefoneAlreadyExists){
                throw new Error("Telefone inválido");
            }

            const passwordHash = await hash(password,8);

            const supplier = supplierRepositories.create({
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
                password: passwordHash,
                telefone
            })

            await supplierRepositories.save(supplier);

            return supplier
    }
}

export {CreateSupplierService}