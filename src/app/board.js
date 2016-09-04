'use strict';

const template = require('./board.html');
const restrict = 'E';

export const board = (constants) =>({
  template,
  restrict,
  link: (scope, elem, attrs, controller) => {
    scope.statuses = constants.STATUSES;
    scope.tasks = [
      {
        status: constants.STATUSES.READY,
        name: 'Add task'
      },
      {
        status: constants.STATUSES.IN_PROGRESS,
        name: 'Clean Code'
      },
      {
        status: constants.STATUSES.COMPLETED,
        name: 'PREPARE'
      },
    ]
  }
});
