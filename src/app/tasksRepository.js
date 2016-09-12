"use strict";
import constants from './constants';

let tasks = [
  {
    status: constants.STATUSES.READY,
    name: 'Add task',
    id: Math.random()
  },
  {
    status: constants.STATUSES.IN_PROGRESS,
    name: 'Clean Code',
    id: Math.random()
  },
  {
    status: constants.STATUSES.COMPLETED,
    name: 'Prepare',
    id: Math.random()
  }
];

export default function ($q, $timeout) {
  this.tasks = tasks;
  this.getTasks = () => $q(resolve => {
    $timeout(() => {
      resolve(tasks.concat());
    }, 1000, true);
  });

  this.startTask = id => $q(resolve => {
    $timeout(() => {
      tasks = tasks.map(task => {
        if (task.id === id) {
          return Object.assign({}, task, {
            status: constants.STATUSES.IN_PROGRESS
          });
        }
        return Object.assign({}, task);
      });

      resolve(tasks.find(task => task.id === id));
    }, 1000, true);
  });

  this.completeTask = id => $q(resolve => {
    $timeout(() => {
      tasks = tasks.map(task => {
        if (task.id === id) {
          return Object.assign({}, task, {
            status: constants.STATUSES.COMPLETED
          });
        }
        return Object.assign({}, task);
      });

      resolve(tasks.find(task => task.id === id));
    }, 1000, true);
  });

  this.updateTask = taskUpdate => $q(resolve => {
    $timeout(() => {
      tasks = tasks.map(task => {
        if (task.id === taskUpdate.id) {
          return Object.assign({}, taskUpdate);
        }
        return Object.assign({}, task);
      });

      resolve(tasks.find(task => task.id === taskUpdate.id));
    }, 1000, true);
  });
}
