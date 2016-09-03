import angular from 'angular';

import {main} from './app/main';

import './index.less';

angular
  .module('app', [])
  .directive('app', main);
