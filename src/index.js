import angular from 'angular';

import {main} from './app/main';
import {board, boardController} from './app/board';
import {task, taskController} from './app/task';
import taskRepo from './app/tasksRepository';
import swimLane, {swimLaneController} from './app/swimLane';
import constants from './app/constants';
import dispatcher from './app/dispatcher';
import boardStore from './app/boardStore';
import actions from './app/actions';

import './index.less';

angular
  .module('app', [])
  .factory('actions', actions)
  .service('dispatcher', dispatcher)
  .service('boardStore', boardStore)
  .service('taskRepository', taskRepo)
  .constant('constants', constants)
  .directive('main', main)
  .directive('board', board)
  .controller('BoardController', boardController)
  .directive('task', task)
  .controller('TaskController', taskController)
  .directive('swimLane', swimLane)
  .controller('SwimLaneController', swimLaneController);
