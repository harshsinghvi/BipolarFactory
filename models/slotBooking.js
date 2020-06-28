const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  day: {
    type: String,
  },
  badmintoncourt: {
    type: [String]
  },
  tenniscourt: {
    type: [String]
  },
  gymarena: {
    type: [String]
  },
  swimmingpool: {
    type: [String]
  },
  clubhouse: {
    type: [String]
  },
  cycling: {
    type: [String]
  },
})

const SlotBook = mongoose.model('slots', slotSchema);

export default SlotBook;