const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({

    destination: (req,res,cb) =>{
        cb(null, 'public/uploads')
    },
    filename: (req,res,cb) =>{
        cb(null,file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
})
const upload = multer ({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5

    },
    fileFilter: (req,file, cb) => {
        const types = /jpeg|jpg|gif/
        const extName = types.test(path.extname(file.originalname).toLocaleLowerCase())
        const mimeType = types.test(file.mimetype)
        if(extName && mimeType){
            cb(null,true)
        }else{
            cb(new Error('Only support Images'))
        }
    }
})
module.exports = upload