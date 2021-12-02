import { Router } from 'express'

import uploadImage from '../utils/uploadImage.js'
import resizeImage from '../utils/resizeImage.js'

import {
    getPosts,
    createPost
} from '../controllers/post.js'

const router = Router()

router.route('/')
    .get(getPosts)
    .post(uploadImage, resizeImage, createPost)

router.route('/upload')
    .post(uploadImage, resizeImage, (req, res, next) => {
        console.log(req.file)

        res.send('Upload')
    })

export default router