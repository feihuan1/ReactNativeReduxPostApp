import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        id: nanoid(),
        title: action.payload.title,
        body: action.payload.body,
      };
      state.push(newPost); 
      console.log(state)
    },
    deletePost: (state, action) => {
      const idToDelete = action.payload.id;
      return state.filter((item) => item.id !== idToDelete);
    },
    updatePost: (state, action) => {
      const { id, title, body } = action.payload;
      const postToUpdate = state.find((post) => post.id === id);
      if (postToUpdate) {
        postToUpdate.title = title;
        postToUpdate.body = body;
      }
    },
  },
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;