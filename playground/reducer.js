import * as actions from "../../playground/actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map(bug => bug.id === action.payload.id ? {...bug, resolved: true} : bug);
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
