import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createRootReducer } from './reducer';
import { all } from 'redux-saga/effects';

import appReducer from "./app/reducer";
import appSaga from "./app/sagas";


const sagaMiddleware = createSagaMiddleware();

const staticReducers = {

};


const store = configureStore({
  reducer: createRootReducer(staticReducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});


store.asyncReducers = {};
store.asyncSagas = {};


export const injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createRootReducer(key,asyncReducer));
};

injectReducer('root',appReducer);


export const injectSaga = (key, asyncSaga) => {
    sagaMiddleware.run(asyncSaga);
    store.asyncSagas[key] = asyncSaga;
};

injectSaga('root',appSaga);

export default store;
