'use strict';

const template = require('./board.html');
const restrict = 'E';

export const board = (constants, tasksRepository) => ({
  template,
  restrict,
  link: scope => {
    scope.statuses = constants.STATUSES;
    scope.tasks = tasksRepository.tasks;
  }
});
