import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ReactionsAmount } from "../types/reaction";

const initialState: ReactionsAmount[] = [
  { postId: 1, likes: 7, dislikes: 37 },
  { postId: 2, likes: 41, dislikes: 44 },
  { postId: 3, likes: 41, dislikes: 22 },
  { postId: 4, likes: 34, dislikes: 30 },
  { postId: 5, likes: 37, dislikes: 48 },
  { postId: 6, likes: 27, dislikes: 38 },
  { postId: 7, likes: 22, dislikes: 16 },
  { postId: 8, likes: 50, dislikes: 16 },
  { postId: 9, likes: 3, dislikes: 49 },
  { postId: 10, likes: 33, dislikes: 40 },
  { postId: 11, likes: 32, dislikes: 31 },
  { postId: 12, likes: 38, dislikes: 28 },
  { postId: 13, likes: 20, dislikes: 7 },
  { postId: 14, likes: 16, dislikes: 22 },
  { postId: 15, likes: 0, dislikes: 16 },
  { postId: 16, likes: 40, dislikes: 20 },
  { postId: 17, likes: 14, dislikes: 39 },
  { postId: 18, likes: 48, dislikes: 35 },
  { postId: 19, likes: 6, dislikes: 19 },
  { postId: 20, likes: 10, dislikes: 22 },
  { postId: 21, likes: 49, dislikes: 17 },
  { postId: 22, likes: 16, dislikes: 24 },
  { postId: 23, likes: 29, dislikes: 38 },
  { postId: 24, likes: 11, dislikes: 6 },
  { postId: 25, likes: 13, dislikes: 26 },
  { postId: 26, likes: 43, dislikes: 30 },
  { postId: 27, likes: 4, dislikes: 31 },
  { postId: 28, likes: 9, dislikes: 8 },
  { postId: 29, likes: 33, dislikes: 29 },
  { postId: 30, likes: 15, dislikes: 35 },
  { postId: 31, likes: 42, dislikes: 5 },
  { postId: 32, likes: 12, dislikes: 1 },
  { postId: 33, likes: 48, dislikes: 17 },
  { postId: 34, likes: 36, dislikes: 21 },
  { postId: 35, likes: 18, dislikes: 48 },
  { postId: 36, likes: 24, dislikes: 18 },
  { postId: 37, likes: 49, dislikes: 40 },
  { postId: 38, likes: 15, dislikes: 34 },
  { postId: 39, likes: 19, dislikes: 33 },
  { postId: 40, likes: 18, dislikes: 4 },
  { postId: 41, likes: 2, dislikes: 15 },
  { postId: 42, likes: 5, dislikes: 29 },
  { postId: 43, likes: 39, dislikes: 33 },
  { postId: 44, likes: 16, dislikes: 21 },
  { postId: 45, likes: 6, dislikes: 13 },
  { postId: 46, likes: 41, dislikes: 36 },
  { postId: 47, likes: 44, dislikes: 50 },
  { postId: 48, likes: 47, dislikes: 3 },
  { postId: 49, likes: 41, dislikes: 45 },
  { postId: 50, likes: 32, dislikes: 32 },
  { postId: 51, likes: 3, dislikes: 25 },
  { postId: 52, likes: 2, dislikes: 43 },
  { postId: 53, likes: 42, dislikes: 33 },
  { postId: 54, likes: 23, dislikes: 23 },
  { postId: 55, likes: 50, dislikes: 9 },
  { postId: 56, likes: 7, dislikes: 48 },
  { postId: 57, likes: 42, dislikes: 25 },
  { postId: 58, likes: 2, dislikes: 49 },
  { postId: 59, likes: 38, dislikes: 45 },
  { postId: 60, likes: 9, dislikes: 13 },
  { postId: 61, likes: 30, dislikes: 26 },
  { postId: 62, likes: 35, dislikes: 42 },
  { postId: 63, likes: 28, dislikes: 7 },
  { postId: 64, likes: 5, dislikes: 36 },
  { postId: 65, likes: 36, dislikes: 45 },
  { postId: 66, likes: 35, dislikes: 50 },
  { postId: 67, likes: 42, dislikes: 32 },
  { postId: 68, likes: 0, dislikes: 30 },
  { postId: 69, likes: 45, dislikes: 42 },
  { postId: 70, likes: 48, dislikes: 27 },
  { postId: 71, likes: 40, dislikes: 45 },
  { postId: 72, likes: 50, dislikes: 35 },
  { postId: 73, likes: 27, dislikes: 0 },
  { postId: 74, likes: 24, dislikes: 46 },
  { postId: 75, likes: 35, dislikes: 20 },
  { postId: 76, likes: 39, dislikes: 3 },
  { postId: 77, likes: 47, dislikes: 8 },
  { postId: 78, likes: 46, dislikes: 50 },
  { postId: 79, likes: 1, dislikes: 14 },
  { postId: 80, likes: 16, dislikes: 5 },
  { postId: 81, likes: 31, dislikes: 46 },
  { postId: 82, likes: 19, dislikes: 4 },
  { postId: 83, likes: 4, dislikes: 33 },
  { postId: 84, likes: 48, dislikes: 39 },
  { postId: 85, likes: 11, dislikes: 33 },
  { postId: 86, likes: 15, dislikes: 10 },
  { postId: 87, likes: 47, dislikes: 15 },
  { postId: 88, likes: 16, dislikes: 9 },
  { postId: 89, likes: 21, dislikes: 13 },
  { postId: 90, likes: 17, dislikes: 6 },
  { postId: 91, likes: 3, dislikes: 5 },
  { postId: 92, likes: 42, dislikes: 45 },
  { postId: 93, likes: 6, dislikes: 43 },
  { postId: 94, likes: 50, dislikes: 2 },
  { postId: 95, likes: 37, dislikes: 40 },
  { postId: 96, likes: 48, dislikes: 16 },
  { postId: 97, likes: 30, dislikes: 13 },
  { postId: 98, likes: 6, dislikes: 8 },
  { postId: 99, likes: 47, dislikes: 40 },
  { postId: 100, likes: 34, dislikes: 35 },
];

const reactionsAmountSlice = createSlice({
  name: "ReactionsAmount",
  initialState,
  reducers: {
    increaseReactionAmount: (state, action) => {
      const { postId, reaction } = action.payload;
      const postIndex = state.findIndex((post) => post.postId === postId);
      if (postIndex !== -1) {
        if (reaction === 0) {
          state[postIndex].likes += 1;
        } else {
          state[postIndex].dislikes += 1;
        }
      }
    },
    decreaseReactionAmount: (state, action) => {
      const { postId, reaction } = action.payload;
      const postIndex = state.findIndex((post) => post.postId === postId);
      if (postIndex !== -1) {
        if (reaction === 0) {
          state[postIndex].likes -= 1;
        } else {
          state[postIndex].dislikes -= 1;
        }
      }
    },
  },
});
export const { increaseReactionAmount, decreaseReactionAmount } =
  reactionsAmountSlice.actions;

export const getReactionsAmount = (state: RootState) => state.reactionsAmount;

export const getPostReactions = (
  state: ReactionsAmount[],
  postId: number | undefined
) => {
  return state.find((post) => post.postId === postId);
};

export default reactionsAmountSlice.reducer;
