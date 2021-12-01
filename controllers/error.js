const sendErrDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    })
}

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    if(process.env.NODE_ENV === 'development') {
        sendErrDev(err, res)
    } else if (process.env.NODE_ENV === 'production') {
        sendErrDev(err, res)
    }
}