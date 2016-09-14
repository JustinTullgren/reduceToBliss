'use strict';

const template = require('./board.html');
const restrict = 'E';
const controller = 'BoardController as board';

export function boardController(store, boardSelectors, actions, constants) {
  let subscriptions = {};

  this.statuses = constants.STATUSES;

  this.filterReadyTasks = () => {
    store.dispatch(actions.filterReady());
  };

  this.filterInProgressTasks = () => {
    store.dispatch(actions.filterInProgress());
  };

  this.filterCompletedTasks = () => {
    store.dispatch(actions.filterCompleted());
  };

  this.fetchTasks = () => {
    store.dispatch(actions.fetchTasks());
  };

  subscriptions.isLoading = store.observe(boardSelectors.isFetching, isLoading => {
    this.isLoading = isLoading;
  });

  subscriptions.filterCompleted = store.observe(boardSelectors.filterCompleted, filter => {
    this.filterCompleted = filter;
  });

  subscriptions.filterInProgress = store.observe(boardSelectors.filterInProgress, filter => {
    this.filterInProgress = filter;
  });

  subscriptions.filterReady = store.observe(boardSelectors.filterReady, filter => {
    this.filterReady = filter;
  });

  subscriptions.tasks = store.observe(boardSelectors.tasks, tasks => {
    this.tasks = tasks;
  });

  // Example Code to Unsub
  this.onDestroy = () => {
    Object.keys(subscriptions).forEach(unsub => subscriptions[unsub]());
    subscriptions = null;
  };
}

export const board = () => ({
  template,
  restrict,
  controller
});
