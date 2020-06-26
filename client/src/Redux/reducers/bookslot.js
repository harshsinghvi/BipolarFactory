import {
  BookSlot
} from '../constants';

const INITIAL_STATE = {
  slotBooked: null,
  error: null,
  bookingSuccess: null,
  initialize: false
}

const bookslotReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case BookSlot.initializeslot:
      return {
        ...state,
        initialize: true,
          bookingSuccess: false,
          slotBooked: null
      };
    case BookSlot.bookslotsuccess:
      return {
        ...state,
        slotBooked: payload,
          initialize: false,
          bookingSuccess: true
      };
    case BookSlot.bookslotfailure:
      return {
        ...state,
        error: payload,
          bookingSuccess: false,
          initialize: false,
          slot: null
      };

    default:
      return state;
  }
}

export default bookslotReducer;