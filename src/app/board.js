'use strict';

const template = require('./board.html');
const restrict = 'E';

export const board = ($timeout, constants, tasksRepository) => ({
  template,
  restrict,
  link: scope => {
    scope.filterReady = false;
    scope.filterInProgress = false;
    scope.filterCompleted = false;

    scope.getTasks = () => {
      $timeout(() => {
        scope.tasks = tasksRepository.tasks;
      }, 500);
    };

    const init = () => {
      scope.statuses = constants.STATUSES;
    };

    const resetFilters = () => {
      scope.filterReady = false;
      scope.filterInProgress = false;
      scope.filterCompleted = false;
    };

    scope.$watch('tasks', resetFilters, true);

    init();
  }
});
