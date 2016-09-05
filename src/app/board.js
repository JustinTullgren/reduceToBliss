'use strict';

const template = require('./board.html');
const restrict = 'E';
const controller = 'BoardController as board';

const link = (scope, element, attrs, controller) => {
  scope.$watch(() => controller.tasks, controller.resetFilters, true);
};

export function boardController($timeout, tasksRepository, constants) {
  this.statuses = constants.STATUSES;
  this.tasks = null;
  this.filters = {
    filterReady: false,
    filterInProgress: false,
    filterCompleted: false
  };

  this.resetFilters = () => {
    this.filters.filterReady = false;
    this.filters.filterInProgress = false;
    this.filters.filterCompleted = false;
  };

  this.getTasks = () => {
    $timeout(() => {
      this.tasks = tasksRepository.tasks;
    }, 500);
  };
}

export const board = () => ({
  template,
  restrict,
  link,
  controller
});
