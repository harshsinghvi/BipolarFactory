const express = require('express');

const {
  bookSlot
} = require('../controller/slotBooking');
const Router = express.Router();

Router.post('/book-slot', bookSlot)

module.exports = Router;