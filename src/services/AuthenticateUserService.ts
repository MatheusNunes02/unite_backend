import { getCustomRepository } from 'typeorm';

import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { MerchantRepositories} from '../repositories/MerchantRepositories';

import { SupplierRepositories} from '../repositories/SupplierRepositories';

interface IAuthenticateRequest{
    email: string;
    password:string;
}

class AuthenticateUserService{
    async execute({email,password}:IAuthenticateRequest){
        const merchantRepositories = getCustomRepository(MerchantRepositories);
        const supplierRepositories = getCustomRepository(SupplierRepositories);


        const merchant = await merchantRepositories.findOne({
            email
        })

        const supplier = await supplierRepositories.findOne({
            email
        })


        if(!merchant){

            if(!supplier){
                throw new Error("Email/Password incorrect");
            }

            const passwordmatch = await compare(password, supplier.password);
            if(!passwordmatch){
                throw new Error("Email/Password incorrect");
            }

            //Gerando token com a chave em hashMD5
            //unitedemoday
            const token = sign(
                {
                email: supplier.email
                },
    
                "2a9bd0ff57f6d7242eaf60237b3b0179",
    
                {
                subject: supplier.id,
                expiresIn:"30d"
                }
            );
    
            return token;

        }

        const passwordmatch = await compare(password, merchant.password);
        if(!passwordmatch){
            throw new Error("Email/Password incorrect");
        }

         //Gerando token com a chave em hashMD5
        //unitedemoday
        const token = sign(
            {
            email: merchant.email
            },

            "2a9bd0ff57f6d7242eaf60237b3b0179",

            {
            subject: merchant.id,
            expiresIn:"30d"
            }
        );


        return token;


    }
}

export { AuthenticateUserService }