"use strict";
const restrict = 'AE';
const template = require('./swimLane.html');
const controller = 'SwimLaneController as swimLane';
const bindToController = true;

const scope = {
  task: '=swimLane'
};

export function swimLaneController(boardStore, constants) {
  this.statuses = constants.STATUSES;

  this.differentStatus = status => {
    return this.task.status !== status;
  };

  boardStore.subscribe(() => {
    switch (this.task.status) {
      case constants.STATUSES.READY:
        this.hideTask = boardStore.getFilterReady();
        break;
      case constants.STATUSES.IN_PROGRESS:
        this.hideTask = boardStore.getFilterInProgress();
        break;
      case constants.STATUSES.COMPLETED:
        this.hideTask = boardStore.getFilterCompleted();
        break;
      default:
        this.hideTask = false;
        break;
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
