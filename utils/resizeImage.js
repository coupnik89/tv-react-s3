import sharp from "sharp";

const resize = (req, res, next) => {
    if(!req.file) return next()

    req.file.filename = `RS3-${req.file.originalname.split('.')[0]}-${Date.now()}.jpeg`

    sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/${req.file.filename}`)

    next()
}

export default resize