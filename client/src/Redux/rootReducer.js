import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import userReducer from './reducers/user';
import currentSlotReducer from './reducers/currentSlot';
import bookslotReducer from './reducers/bookslot';



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer']
}

const rootReducer = combineReducers({
   userReducer,
   currentSlotReducer,
   bookslotReducer
})

export default persistReducer(persistConfig ,rootReducer);