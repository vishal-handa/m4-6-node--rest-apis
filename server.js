'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { allclients, clientByID, addClient, deleteClient }=require('./handlers/clientHandlers');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  //exercise2
  .get("/allclients",allclients)
  .get("/allclients/:id",clientByID)
  .post("/addclient",addClient)
  .delete("/deleteclient/:id",deleteClient)

  //

  .listen(8000, () => console.log(`Listening on port 8000`));
