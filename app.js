import express from 'express'
import cors from 'cors'
import AppError from './models/Error.js'

const app = express()

// Config
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

import handleError from './controllers/error.js'
import postsRoutes from './routes/posts.js'

// Routes handler
app.use('/api/v1/posts', postsRoutes)

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'Worked!'
    })
})

// Handle errors
app.all('*', (req, res, next) => {
    next(new AppError(400, 'Page not found'))
})

app.use(handleError)

export default app