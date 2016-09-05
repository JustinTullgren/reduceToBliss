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

    const applyFilters = () => {
      scope.$emit('filter', {
        ready: scope.filterReady,
        inProgress: scope.filterInProgress,
        completed: scope.filterCompleted
      });
    };
    scope.$watchCollection('tasks', applyFilters);

    init();
  }
});
