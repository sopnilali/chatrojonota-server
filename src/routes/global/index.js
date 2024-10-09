
const global = (app)=>{

    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });


    app.all('*', (req, res, next) => {
        const error = new Error(` Could not found ${req.url}`);
        error.status = 404;
        next(error);
    })
    
    // error handling middleware
    
    app.use((err, req, res, next) => {
        res.status(err.status || 500).send({
            message: err.message,
            error: req.app.get('env') === 'development'? err : {
                message: err.message
            }
        })
     
    })
}

module.exports = global;