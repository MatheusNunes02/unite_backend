import { Options, diskStorage } from 'multer';
import { resolve } from 'path';
import { randomBytes } from 'crypto';

export const multerconfig = {
    dest: resolve(__dirname,'..','public','uploads'),
    storage: diskStorage({
        destination: (request, file, callback) =>{
            callback(null, resolve(__dirname,'..','public','uploads'))
        },
        filename:(request, file, callback) =>{
            randomBytes(16,(error,hash) =>{
                if(error){
                    callback(error, file.filename);
                }
                const filename = `${hash.toString('hex')}.png`
                callback(null,filename)
            })
        }
    }),
    limits:{
        fileSize: 5*1024*1024  // 5mb
    },
    fileFilter: (request, file, callback) =>{
        const formats = [
            'image/jpeg',
            'image/jpg',
            'image/png'
        ];

        if(formats.includes(file.mimetype)){
            callback(null, true);
        }else{
            callback(new Error ('Format not accepted'))
        }
    }
} as Options 