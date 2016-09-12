'use strict';

const template = require('./board.html');
const restrict = 'E';
const controller = 'BoardController as board';

export function boardController(boardStore, dispatcher, actions, constants) {
  this.statuses = constants.STATUSES;

  this.filterReadyTasks = () => {
    dispatcher.dispatch(actions.filterReady());
  };

  this.filterInProgressTasks = () => {
    dispatcher.dispatch(actions.filterInProgress());
  };

  this.filterCompletedTasks = () => {
    dispatcher.dispatch(actions.filterCompleted());
  };

  this.fetchTasks = () => {
    dispatcher.dispatch(actions.fetchTasks());
  };

  boardStore.subscribe(() => {
    this.isLoading = boardStore.getIsFetching();
    this.filterCompleted = boardStore.getFilterCompleted();
    this.filterInProgress = boardStore.getFilterInProgress();
    this.filterReady = boardStore.getFilterReady();
    if (this.isLoading) {
      this.task = null;
    } else {
      this.tasks = boardStore.getTasks();
    }
  });
}

export const board = () => ({
  template,
  restrict,
  controller
});
