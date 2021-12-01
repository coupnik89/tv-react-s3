import { config } from 'dotenv'
config()

import app from './app.js'

import connectBD from './DB/mongoose.js'

const port = process.env.PORT || 5000

const url = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD)

// Connect to database
connectBD(url, app, port)