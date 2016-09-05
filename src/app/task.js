'use strict';

const template = require('./task.html');
const restrict = 'E';
const getLink = constants => (scope => {
  scope.showRename = false;

  scope.my = {
    newName: ''
  };

  scope.start = task => {
    task.status = constants.STATUSES.IN_PROGRESS;
  };

  scope.complete = task => {
    task.status = constants.STATUSES.COMPLETED;
  };

  scope.rename = () => {
    scope.showRename = true;
  };

  scope.update = task => {
    task.name = scope.my.newName;
    scope.showRename = false;
  };
});

export const task = constants => ({
  template,
  restrict,
  link: getLink(constants)
});
