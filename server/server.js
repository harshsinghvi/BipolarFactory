import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import AuthRouter from './routes/auth';
import BookSlotRoute from './routes/bookSlot';
import {
  bookSlot
} from './controller/slotBooking';

require('dotenv').config({
  path: './config.env'
});

const app = express();

app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));



app.use(AuthRouter);
app.use(bookSlot);

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}).then((con, err) => {
  if (con) {
    console.log('Connected to DB')
  } else {
    console.log(err)
  }
});

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('../client/build'));
  app.get("*" , (req,res)=>{
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err, con) => {
  if (!err) console.log(`Server is listening on ${PORT}`)
});