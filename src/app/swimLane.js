"use strict";
const restrict = 'AE';
const template = require('./swimLane.html');
const controller = 'SwimLaneController as swimLane';
const bindToController = true;

const scope = {
  filters: '=swimLaneFilters',
  task: '=swimLane'
};

export function swimLaneController(constants) {
  this.filterTask = task => {
    return (task.status === constants.STATUSES.COMPLETED && this.filters.filterCompleted) ||
    (task.status === constants.STATUSES.IN_PROGRESS && this.filters.filterInProgress) ||
    (task.status === constants.STATUSES.READY && this.filters.filterReady);
  };

  this.statuses = constants.STATUSES;
}

export default () => ({
  restrict,
  template,
  scope,
  controller,
  bindToController
});
