import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.title,
        body: action.payload.body,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      const idToDelete = action.payload.id;
      return state.filter((item) => item.id !== idToDelete);
    },
  },
});

export const { addTask, deleteTask } = postsSlice.actions;

export default postsSlice.reducer;