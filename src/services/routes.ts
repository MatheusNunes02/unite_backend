import { Router, Response, Request } from "express";
import { CreateMerchantController } from "../controllers/CreateMerchantController";
import { CreateSupplierController } from "../controllers/CreateSupplierController";

import { multerconfig } from "../config/multer";
import multer from "multer";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { CreateCategorySupplierController } from "../controllers/CreateCategorySupplierController";
import { CreateAvaliacaoController } from "../controllers/CreateAvaliacaoController";
import { ListMerchantController } from "../controllers/ListMerchantsController";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { ValidateTokenController } from "../controllers/ValidateTokenController";
import { ListSupplierControllers } from "../controllers/ListSuppliersControllers";

//Instância do Router do Express, serve para criar as rotas;
const router = Router();

const createMerchantController = new CreateMerchantController();
const createSupplierController = new CreateSupplierController();
const authenticateUserController = new AuthenticateUserController();
const createCategoryController = new CreateCategoryController();
const createCategorySupplierController = new CreateCategorySupplierController();
const createAvaliacaoController = new CreateAvaliacaoController();
const listMerchantController = new ListMerchantController();
const listSuppliersController = new ListSupplierControllers();

const validateTokenController = new ValidateTokenController();

//Rotas para pegar informações do Banco de dados
router.get("/", (Request, Response) => {
  return Response.json({
    erro: "Nada encontrado",
  });
});
router.get("/suppliers", listSuppliersController.handle);
router.get("/merchants", listMerchantController.handle);

//Cadastro de informações no banco de dados
router.post(
  "/merchants",
  multer(multerconfig).single("file"),
  createMerchantController.handle
);
router.post(
  "/suppliers",
  multer(multerconfig).single("file"),
  createSupplierController.handle
);
router.post("/categories", createCategoryController.handle);
router.post("/suppliers/categories", createCategorySupplierController.handle);
router.post("/avaliacao", createAvaliacaoController.handle);

//Login
router.post("/login", authenticateUserController.handle);

//Check authorization
router.post("/checkAuthorization", validateTokenController.handle);

export { router };
