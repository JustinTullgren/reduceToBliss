'use strict';

const template = require('./task.html');
const restrict = 'E';
const link = (scope, elem, attrs, controller) => {

};

export const task = () =>({
  template,
  restrict,
  link
});
