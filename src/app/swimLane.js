"use strict";
const restrict = 'AE';
const template = require('./swimLane.html');
const controller = 'SwimLaneController as swimLane';
const bindToController = true;

const scope = {
  task: '=swimLane'
};

export function swimLaneController(store, boardSelectors, constants) {
  this.statuses = constants.STATUSES;

  this.differentStatus = status => {
    return this.task.status !== status;
  };

  store.observe(boardSelectors.filterReady, filter => {
    if (this.task.status === constants.STATUSES.READY) {
      this.hideTask = filter;
    }
  });

  store.observe(boardSelectors.filterInProgress, filter => {
    if (this.task.status === constants.STATUSES.IN_PROGRESS) {
      this.hideTask = filter;
    }
  });

  store.observe(boardSelectors.filterCompleted, filter => {
    if (this.task.status === constants.STATUSES.COMPLETED) {
      this.hideTask = filter;
    }
  });
}

export default () => ({
  restrict,
  template,
  scope,
  controller,
  bindToController
});
