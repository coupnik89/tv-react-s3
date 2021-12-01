import multer from 'multer'

import AppError from '../models/Error.js'

const multerStorage = multer.memoryStorage()

const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        cb(new AppError(400, 'Not an image. Please upload image only.'), false)
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})

export default upload.single('image')