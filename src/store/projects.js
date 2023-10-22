import { createSlice } from "@reduxjs/toolkit";
let lastID = 0;
const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (projects, action) => {
      projects.push({
        id: ++lastID,
        description: action.payload.description,
      });
    },
  },
});
export const {addProject} = slice.actions;
export default slice.reducer;

