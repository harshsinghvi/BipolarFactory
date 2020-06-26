import moment from 'moment';

import SlotBook from '../models/slotBooking';

const today = moment().format("MMM Do YYYY");



export const bookSlot = async (req, res, next) => {
  const {
    time,
    event
  } = req.body;

  try {
    const slots = await SlotBook.findOne({
      day: today
    });
    if (!slots) {
      const newSlot = await SlotBook.create({
        day: today,
        [event]: time
      })
      res.status(201).json({
        message: "Success",
        slotCreated: newSlot
      })
    }
    if (slots[event].length === 0) {
      const newSlot = await slots.updateOne({
        [event]: time
      })
      res.status(201).json({
        message: "Success",
        slotCreated: newSlot
      })
    }

    const isAvailable = checkSlot(slots[event], time, event);

    if (!isAvailable) {
      const updatesSlot = await SlotBook.findOneAndUpdate({
        day: today
      }, {
        $push: {
          [event]: [time]
        }
      })
      res.status(201).json({
        message: "Success",
        updatesSlot
      })
    } else {
      res.status(500).json({
      message: "failure",
      error: "Slot is alreday booked"
    })
    }


  } catch (err) {
    res.status(400).json({
      message: "failure",
      error: err
    })
  }
}

function checkSlot(data, time) {
  return data.includes(time)
}