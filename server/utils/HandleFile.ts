import multer from 'multer' 

const storage = multer.diskStorage({

    destination: function (_req, _file, cb){
        const pathStorage = `${__dirname}/../storage`
        cb(null, pathStorage)
    },
    filename: function(_req, file, cb){
        const extension = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${extension}`;
        cb(null, filename)

    }
})

export const uploadMiddleware = multer({storage});