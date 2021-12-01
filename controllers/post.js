import catchAsync from "../utils/catchAsync.js"

import Photo from "../models/Photo.js"

export const getPosts = catchAsync(async (req, res, next) => {
    const posts = await Photo.find()

    res.status(200).json({
        status: 'success',
        data: posts
    })
})

export const createPost = catchAsync(async (req, res, next) => {
    req.body.photo_url = req.file.filename

    const photo = await Photo.create(req.body)

    res.status(200).json({
        status: 'success',
        data: photo
    })
})
