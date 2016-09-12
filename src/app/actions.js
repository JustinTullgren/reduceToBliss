'use strict';

const getFetchTasks = repository => (
  () => {
    return dispatch => {
      dispatch({
        type: 'fetchTasks'
      });

      return repository.getTasks()
        .then(tasks => {
          dispatch(receiveTasks(tasks));
        });
    };
  }
);

const getStartTask = repository => (
  id => {
    return dispatch => {
      dispatch({
        type: 'startTask',
        payload: {
          id
        }
      });

      return repository.startTask(id)
        .then(task => {
          dispatch(receiveTask(task));
        });
    };
  }
);

const getCompleteTask = repository => (
  id => {
    return dispatch => {
      dispatch({
        type: 'completeTask',
        payload: {
          id
        }
      });

      return repository.completeTask(id)
        .then(task => {
          dispatch(receiveTask(task));
        });
    };
  }
);

const getUpdateTask = repository => (
  task => {
    return dispatch => {
      dispatch({
        type: 'updateTask',
        payload: {
          task
        }
      });

      return repository.updateTask(task)
        .then(task => {
          dispatch(receiveTask(task));
        });
    };
  }
);

const receiveTask = payload => ({
  type: 'receiveTask',
  payload
});

const receiveTasks = payload => ({
  type: 'receiveTasks',
  payload
});

const filterReady = () => ({
  type: 'filterReady'
});

const filterCompleted = () => ({
  type: 'filterCompleted'
});

const filterInProgress = () => ({
  type: 'filterInProgress'
});

const resetFilters = () => ({
  type: 'resetFilters'
});

export default taskRepository => ({
  fetchTasks: getFetchTasks(taskRepository),
  receiveTasks,
  filterReady,
  filterCompleted,
  filterInProgress,
  resetFilters,
  startTask: getStartTask(taskRepository),
  completeTask: getCompleteTask(taskRepository),
  updateTask: getUpdateTask(taskRepository)
});
