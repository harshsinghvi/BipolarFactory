const express = require('express');


const{
  login,
  signup
} = require('./../controller/authController');
const Router = express.Router();

Router.post('/signup', signup);
Router.post('/login', login);

module.exports =  Router;
