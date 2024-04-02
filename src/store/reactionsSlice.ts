import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Reaction } from "../types/reaction";

const initialState: Reaction[] = [];

const reactionsSlice = createSlice({
  name: "reactions",
  initialState,
  reducers: {
    setReaction: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingReactionIndex = state.findIndex(
        (item) => item.postId === postId
      );
      if (existingReactionIndex !== -1) {
        state[existingReactionIndex].reaction = reaction;
      } else {
        state.push({ postId, reaction });
      }
    },
    setLike: (state, action) => {
      const { postId } = action.payload;
      state.push({ postId, reaction: 0 });
    },
    setDislike: (state, action) => {
      const { postId } = action.payload;
      state.push({ postId, reaction: 1 });
    },
    removeReaction: (state, action) => {
      const { postId } = action.payload;
      return state.filter((item) => item.postId !== postId);
    },
  },
});

export const { setReaction, setLike, setDislike, removeReaction } =
  reactionsSlice.actions;

export const getReactions = (state: RootState) => state.reactions;

export const getCurrPostReaction = (
  state: Reaction[],
  postId: number | undefined
) => {
  return state.find((post) => post.postId === postId);
};

export default reactionsSlice.reducer;
