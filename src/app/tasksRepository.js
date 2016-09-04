"use strict";
import constants from './constants';

let tasks = [
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
        name: 'Prepare'
      },
    ];

export default function () {
  this.tasks = tasks;
//TODO: this is the next stage
// this.getTasks = () => tasks.concat();
// this.addTask = (task) => tasks = tasks.concat(task);
// this.removeTask = (task) => {
//   tasks = tasks.filter((t) => t === task);
//   return tasks;
// }
};
