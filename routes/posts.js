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

export default router