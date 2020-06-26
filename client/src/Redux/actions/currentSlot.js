import {slot} from '../constants';

export const pickSlot = (data)=>({
  type: slot.pickslot,
  payload: data
})