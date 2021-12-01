import mongoose from 'mongoose'

const photoSchema = mongoose.Schema({
    photo_url: {
        type: String,
        required: [true, 'Please provide an image.']
    },
    description: String
})

export default mongoose.model('Photo', photoSchema)