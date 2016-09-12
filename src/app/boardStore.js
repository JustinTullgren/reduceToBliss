'use strict';
let subscriptions = [];
let tasks = [];
let isFetching = false;
const filters = {
  filterReady: false,
  filterInProgress: false,
  filterCompleted: false
};

const subscribe = callback => {
  callback();
  subscriptions = subscriptions.concat(callback);
};

const emitChange = () => {
  subscriptions.forEach(sub => sub());
};

const onChange =
  action => {
    switch (action.type) {
      case 'fetchTasks':
        isFetching = true;
        emitChange();
        break;
      case 'receiveTasks':
        tasks = [].concat(action.payload);
        isFetching = false;
        emitChange();
        break;
      case 'filterReady':
        filters.filterReady = !filters.filterReady;
        emitChange();
        break;
      case 'filterCompleted':
        filters.filterCompleted = !filters.filterCompleted;
        emitChange();
        break;
      case 'filterInProgress':
        filters.filterInProgress = !filters.filterInProgress;
        emitChange();
        break;
      case 'resetFilters':
        filters.filterReady = false;
        filters.filterCompleted = false;
        filters.filterInProgress = false;
        emitChange();
        break;
      default:
        break;
    }
  };

export default dispatcher => {
  dispatcher.subscribe(onChange);
  return {
    subscribe,
    getTasks: () => tasks,
    getIsFetching: () => isFetching,
    getFilterReady: () => filters.filterReady,
    getFilterInProgress: () => filters.filterInProgress,
    getFilterCompleted: () => filters.filterCompleted
  };
};
