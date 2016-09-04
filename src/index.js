import angular from 'angular';

import {main} from './app/main';
import {board} from './app/board';
import {task} from './app/task';
import constants from './app/constants';

import './index.less';

angular
  .module('app', [])
  .constant('constants', constants)
  .directive('main', main)
  .directive('board', board)
  .directive('task', task);
