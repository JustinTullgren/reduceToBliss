'use strict';

const template = require('./task.html');
const restrict = 'E';
const controller = 'TaskController as task';
const scope = {
  item: '=taskItem'
};
const bindToController = true;

export function taskController(dispatcher, actions) {
  this.showRename = false;

  this.rename = () => {
    this.showRename = true;
  };

  this.start = task => dispatcher.dispatch(actions.startTask(task.id));

  this.complete = task => dispatcher.dispatch(actions.completeTask(task.id));

  this.update = task => {
    dispatcher.dispatch(actions.updateTask(task));
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
