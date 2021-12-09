import "reflect-metadata";
import express,{Request,Response, NextFunction} from 'express';
import "express-async-errors"
import cors from 'cors';
import { router } from "./services/routes";
import path  from 'path';


import "./database"

const app = express();


app.use(cors())


//Definir que o express possa usar jsons
app.use(express.json()); 

//Utilizar as rotas do Router
app.use(router);

// Midleware
app.use((err: Error,request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.use('/uploads',express.static(path.join(__dirname, 'public/uploads')));
//Ouvir a porta 3000
app.listen(3000, () => console.log(`Server running!!!`))