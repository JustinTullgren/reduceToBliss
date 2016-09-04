'use strict';

const template = require('./task.html');
const restrict = 'E';
const getLink = (constants) => ((scope, elem, attrs, controller) => {
  scope.start = (task) => {
    task.status = constants.STATUSES.IN_PROGRESS;
  };

  scope.complete = (task) => {
    task.status = constants.STATUSES.COMPLETED;
  };

});

export const task = (constants) =>({
  template,
  restrict,
  link: getLink(constants)
});
