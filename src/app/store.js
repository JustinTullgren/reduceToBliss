'use strict';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default boardReducer => {
  const rootReducer = combineReducers({boardReducer});
  const store = createStore(rootReducer, applyMiddleware(thunk));

  const observe = (select, onChange) => {
    let currentState;

    const handleChange = () => {
      const nextState = select(store.getState());
      if (nextState !== currentState) {
        currentState = nextState;
        onChange(currentState);
      }
    };

    const unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
  };

  return Object.assign(store, {observe});
};
