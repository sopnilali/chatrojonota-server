const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const { LOCAL_URL, CLIENT } = require('../config/config');

const applyMiddleware = (app)=>{
    app.use(express.json());
    app.use(cors({
        origin: [
            LOCAL_URL,
            CLIENT
        ],
        credentials: true,
    }));
    app.use(cookieParser());
}

module.exports = applyMiddleware;