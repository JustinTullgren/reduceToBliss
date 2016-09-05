"use strict";
const restrict = 'AE';
const template = require('./swimLane.html');

export default constants => ({
  restrict,
  template,
  link: scope => {
    scope.filterTask = task => {
      return (task.status === constants.STATUSES.COMPLETED && scope.filterCompleted) ||
        (task.status === constants.STATUSES.IN_PROGRESS && scope.filterInProgress) ||
        (task.status === constants.STATUSES.READY && scope.filterReady);
    };
  }
});
