// handleReaction.js
import { useDispatch } from "react-redux";
import {
  increaseReactionAmount,
  decreaseReactionAmount,
} from "./../store/reactionsAmountSlice";
import {
  setReaction,
  setLike,
  setDislike,
  removeReaction,
} from "../store/reactionsSlice";
import { Reaction } from "../types/reaction";

export const useReaction = () => {
  const dispatch = useDispatch();

  const handleReaction = (
    type: number,
    id: number | undefined,
    currPostReaction: Reaction | undefined
  ) => {
    if (!id) {
      return;
    }

    const postId = +id;
    const existingReaction = currPostReaction?.reaction;

    if (existingReaction === type) {
      dispatch(removeReaction({ postId }));
      dispatch(decreaseReactionAmount({ postId, reaction: existingReaction }));
      return;
    }

    if (existingReaction !== undefined && existingReaction !== type) {
      dispatch(setReaction({ postId, reaction: type }));
      dispatch(decreaseReactionAmount({ postId, reaction: existingReaction }));
    }

    if (existingReaction === undefined) {
      if (type === 0) {
        dispatch(setLike({ postId }));
      } else {
        dispatch(setDislike({ postId }));
      }
    }

    dispatch(increaseReactionAmount({ postId, reaction: type }));
  };

  return handleReaction;
};
