import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app/reducer";

export const createRootReducer = (key,asyncReducers) => {
  return combineReducers({
    [key]:asyncReducers,
    form:formReducer,
  });
};
