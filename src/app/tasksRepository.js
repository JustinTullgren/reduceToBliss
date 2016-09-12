"use strict";
import constants from './constants';

const tasks = [
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
  }
];

export default function ($q, $timeout) {
  this.tasks = tasks;
  this.getTasks = () => $q(resolve => {
    $timeout(() => {
      resolve(tasks.concat());
    }, 1000, true);
  });
}
