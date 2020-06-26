import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import AuthRouter from './routes/auth';
import BookSlotRoute from './routes/bookSlot';
import { bookSlot } from './controller/slotBooking';

require('dotenv').config();

const app  = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(AuthRouter);
app.use(bookSlot);

mongoose.connect(process.env.MONGODBURI, {
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

app.listen(process.env.PORT,(err,con)=>{
  if(!err) console.log(`Server is listening on ${process.env.PORT}`)
});


