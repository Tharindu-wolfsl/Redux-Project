/*---------------------------------------------------------------- Using slice ----------------------------------------------------------------*/
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      let index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      //remove 1 element at index
      let index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },
    addBugToUser: (bugs, action) => { 
      let index = bugs.findIndex((bug) => bug.id === action.payload.bugId);
      console.log(action.payload);
      bugs[index].userId = action.payload.userId;

    }
  },
});
console.log(slice.actions);
export const { bugAdded, bugRemoved, bugResolved, addBugToUser } = slice.actions;
export default slice.reducer;

//selector example
// export function unresolvedBugs(state) {
//   return state.entities.bugs.filter(bug => !bug.resolved);
// }

//Memorize data using reslect package if we  need to get same data twice this return second on from cache without re rendering component
export const getUnresolvedBugs =createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
);
export const getBugsAssignToUser = userId =>createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === userId)
);

/*---------------------------------------------------------------- Actions and reducers sperately ---------------------------------------------------------------- */

// import { createAction, createReducer } from "@reduxjs/toolkit";

// //Action creators
// export const bugAdded = createAction("bugAdded");
// export const bugResolved = createAction("bugResolved");
// export const bugRemoved = createAction("bugRemoved");

// //reducer
// let lastId = 0;

// export default createReducer([], {
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },
//   [bugResolved.type]: (bugs, action) => {
//     let index = bugs.indexOf((bug) => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },
//   [bugRemoved.type]: (bugs, action) => {
//     //remove 1 element at index
//     let index = bugs.indexOf((bug) => bug.id === action.payload.id);
//     bugs.splice(index, 1);
//   },
// });
// export default function reducer(state = [], action) {

//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case bugRemoved.type:
//       return state.filter((bug) => bug.id !== action.payload.id);
//     case bugResolved.type:
//         console.log(bugResolved);
//       return state.map((bug) =>
//         bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//       );
//     default:
//       return state;
//   }
// }
