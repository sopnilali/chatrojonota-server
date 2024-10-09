const express = require('express');
const connectDB = require('./db/connectDB');
const app = express();
// Enable CORS for local development
const port = process.env.PORT || 3000;
require('dotenv').config()

const myPostRoutes = require('./routes/MyPost');
const myCategoryRoutes = require('./routes/Category');
const applyMiddleware = require('./middleware/applymiddleware');
const global = require('./routes/global');
const authenticationRoutes = require('./routes/authentication')


// api routes
applyMiddleware(app)
app.use(myPostRoutes);
app.use(myCategoryRoutes);
app.use(authenticationRoutes);



// global middlware error handlers routes
global(app);

// Connect to MongoDB database
const main = async ()=>{
    await connectDB();
    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
    });
}

main().catch(err => console.log(err));
