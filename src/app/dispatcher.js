'use strict';
const subscriptions = {};
let dispatching = false;

const subscribe = callback => {
  if (dispatching) {
    throw new Error('Cannot subscribe during dispatch');
  }

  const id = Math.random().toString();

  subscriptions[id] = callback;

  return id;
};

const dispatch = action => {
  // if it is a thunk/async action
  // eslint-disable-next-line
  if (typeof action === 'function') {
    action(dispatch);
  } else {
    if (dispatching) {
      throw new Error('Cannot dispatch during a dispatch');
    }
    dispatching = true;
    // eslint-disable-next-line
    // TODO: get to map
    Object.keys(subscriptions).forEach(key => {
      subscriptions[key](action);
    });
  }
  dispatching = false;
};

export default () => ({
  subscribe,
  dispatch
});
