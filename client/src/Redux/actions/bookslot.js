import {BookSlot} from '../constants';

export const bookslotsuceess = (data)=>({
   type: BookSlot.bookslotsuccess,
   payload: data
})

export const initializeslot = (data)=>({
   type: BookSlot.initializeslot,
   payload: data
})

export const bookslotFailure = (data)=>({
  type: BookSlot.bookslotfailure,
  payload: data
})