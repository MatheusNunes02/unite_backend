import { response, Router, Response, Request } from 'express';
import { CreateMerchantController } from '../controllers/CreateMerchantController';
import { CreateSupplierController } from '../controllers/CreateSupplierController';

import { multerconfig } from '../config/multer';
import multer from 'multer';

const router = Router();

const createMerchantController = new CreateMerchantController();
const createSupplierController = new CreateSupplierController();

router.get("/",(Request, Response) =>{
    return Response.json({
        erro:"Nada encontrado"
    })
})

router.post("/merchants",multer(multerconfig).single('file'), createMerchantController.handle);

router.post("/suppliers",multer(multerconfig).single('file'), createSupplierController.handle)

export { router }