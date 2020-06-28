import express from 'express';
import {bookSlot} from '../controller/slotBooking';
const Router = express.Router();

Router.post('/book-slot', bookSlot )

export default Router;