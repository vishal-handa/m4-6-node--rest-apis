'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { allclients, clientByID, addClient, deleteClient }=require('./handlers/clientHandlers');
const { getWordID, getWord, playGame }=require('./handlers/hangmanHandlers')

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

  //exercise3
  .get("/hangman/word/:id",getWordID)
  .get("/hangman/word", getWord)
  .get("/hangman/guess/:id/:letter", playGame)

  .listen(8000, () => console.log(`Listening on port 8000`));
