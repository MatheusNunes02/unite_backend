import { response, Router, Response, Request } from 'express';
import { CreateMerchantController } from '../controllers/CreateMerchantController';
import { multerconfig } from '../config/multer';
import multer from 'multer';

const router = Router();

const createMerchantController = new CreateMerchantController();

router.get("/",(Request, Response) =>{
    return Response.json({
        erro:"Nada encontrado"
    })
})

router.post("/merchants",multer(multerconfig).single('file'), createMerchantController.handle);

router.post("/uploads",(request: Request, response: Response) =>{
    console.log('./uploads/'+request.file?.filename)

    return response.json({message:'foi?'})
});

export { router }