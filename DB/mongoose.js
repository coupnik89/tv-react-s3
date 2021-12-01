import mongoose from 'mongoose'

export default async (url, app, port) => {
    try {
        const db = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        if(db) {
            console.log('Connect to database')
            app.listen(port, () => {
                console.log(`Server up and running on port ${port} ✅`)
            })
        }
    } catch (error) {
        console.log('Connect to database failed.', error)
    }
}

