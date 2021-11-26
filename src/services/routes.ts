import { response, Router, Response, Request } from 'express';
import { CreateMerchantController } from '../controllers/CreateMerchantController';
import { CreateSupplierController } from '../controllers/CreateSupplierController';

import { multerconfig } from '../config/multer';
import multer from 'multer';
import { CreateCategoryController } from '../controllers/CreateCategoryController';
import { CreateCategorySupplierController} from '../controllers/CreateCategorySupplierController'
import { CreateAvaliacaoController } from '../controllers/CreateAvaliacaoController';

const router = Router();

const createMerchantController = new CreateMerchantController();
const createSupplierController = new CreateSupplierController();
const createCategoryController = new CreateCategoryController();
const createCategorySupplierController = new CreateCategorySupplierController();
const createAvaliacaoController = new CreateAvaliacaoController();

router.get("/",(Request, Response) =>{
    return Response.json({
        erro:"Nada encontrado"
    })
})

router.post("/merchants",multer(multerconfig).single('file'), createMerchantController.handle);

router.post("/suppliers",multer(multerconfig).single('file'), createSupplierController.handle)

router.post("/categories", createCategoryController.handle)

router.post("/suppliers/categories", createCategorySupplierController.handle)

router.post("/avaliacao", createAvaliacaoController.handle)

export { router }