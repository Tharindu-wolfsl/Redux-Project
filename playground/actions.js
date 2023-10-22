import * as actions from "./actionTypes";

const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description,
  },
});

const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: id
  },
});

const bugResolved = (id) => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id: id
    }
});

export { bugAdded, bugRemoved, bugResolved };
