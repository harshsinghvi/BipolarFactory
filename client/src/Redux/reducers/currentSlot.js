import {slot} from '../constants';

const INITIAL_SATATE = {
  slotpicked: null
}

const currentSlotReducer = (state = INITIAL_SATATE, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case slot.pickslot:
      return {
        ...state,
        slotpicked: payload
      };
    default:
      return state;
  }
}

export default currentSlotReducer;