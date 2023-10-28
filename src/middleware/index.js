const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { ENV_CONFIG } = require('../config/env.config');
const { cloudinaryConfig } = require('../config/cloudinary.config');

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({
        origin: 'https://faithful-dog-gear.cyclic.app/'
    }));
    app.use(express.static('public'))
    app.use('*', cloudinaryConfig)

    // for deployment static file serve
    app.use(express.static(path.join(__dirname, "../../client/build")));
    app.get("/", function(req, res) {
        res.sendFile(
            path.join(__dirname, "../../client/build/index.html"),
            function(err) {
                res.status(500).send(err)
            }
        )
    })

    if (ENV_CONFIG.node_env === 'development') {
        app.use(morgan('dev'));
    }
}