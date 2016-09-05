'use strict';

const template = require('./task.html');
const restrict = 'E';
const controller = 'TaskController as task';
const scope = {
  item: '=taskItem'
};
const bindToController = true;

export function taskController(constants) {
  this.showRename = false;

  this.newName = null;

  this.start = task => {
    task.status = constants.STATUSES.IN_PROGRESS;
  };

  this.complete = task => {
    task.status = constants.STATUSES.COMPLETED;
  };

  this.rename = () => {
    this.showRename = true;
  };

  this.update = (task, name) => {
    task.name = name;
    this.showRename = false;
  };
}

export const task = () => ({
  template,
  restrict,
  controller,
  scope,
  bindToController
});
