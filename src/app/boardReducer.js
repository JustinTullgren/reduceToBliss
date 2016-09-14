const defaultState = {
  isFetching: false,
  tasks: [],
  filterReady: false,
  filterCompleted: false,
  filterInProgress: false
};

export const boardSelectors = () => {
  const isFetching = state => state.boardReducer.isFetching;
  const tasks = state => state.boardReducer.tasks;
  const filterReady = state => state.boardReducer.filterReady;
  const filterCompleted = state => state.boardReducer.filterCompleted;
  const filterInProgress = state => state.boardReducer.filterInProgress;
  return {
    isFetching,
    tasks,
    filterReady,
    filterCompleted,
    filterInProgress
  };
};

export const boardReducer = () =>
  (state = defaultState, action) => {
    if (!action) {
      return state;
    }
    switch (action.type) {
      case 'updateTask':
      case 'completeTask':
      case 'startTask':
      case 'fetchTasks':
        return Object.assign({}, state, {
          isFetching: true
        });
      case 'receiveTask': {
        const tasks = state.tasks.reduce((result, task) => {
          if (task.id === action.payload.id) {
            return result.concat(action.payload);
          }

          return result.concat(task);
        }, []);

        return Object.assign({}, state, {
          tasks,
          isFetching: false
        });
      }
      case 'receiveTasks':
        return Object.assign({}, state, {
          isFetching: false,
          tasks: [].concat(action.payload)
        });
      case 'filterReady':
        return Object.assign({}, state, {
          filterReady: !state.filterReady
        });
      case 'filterCompleted':
        return Object.assign({}, state, {
          filterCompleted: !state.filterCompleted
        });
      case 'filterInProgress':
        return Object.assign({}, state, {
          filterInProgress: !state.filterInProgress
        });
      default:
        return state;
    }
  };

