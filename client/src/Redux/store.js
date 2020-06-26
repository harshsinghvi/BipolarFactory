import {
  createStore,
  applyMiddleware
} from 'redux';
import {
  persistStore
} from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const middlerware = [logger, sagaMiddleware];
export const store = createStore(rootReducer, applyMiddleware(...middlerware));

sagaMiddleware.run(rootSaga);

export const persistedStore = persistStore(store)