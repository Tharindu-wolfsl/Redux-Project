//Action Types

const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

//Action creators
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugRemoved = (id) => ({
  type: BUG_REMOVED,
  payload: {
    id: id,
  },
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: {
    id: id,
  },
});

//reducer
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }

  //SUing if else
  // if(action.type ==='bugAdded') {
  //      return [
  //         ...state,
  //         {
  //             id : ++lastID,
  //             description: action.payload.description,
  //             resolved: false
  //         }
  //      ]
  // } else if(action.type ==='bugRemoved')
  //     return state.filter(bug => bug.lastID != action.payload.id)
  // else
  //     return state;
}
