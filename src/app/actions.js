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
  resetFilters
});
