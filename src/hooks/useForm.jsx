import { useReducer, useCallback } from "react";
import { ACTIONS } from "../services/settings";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_KEYWORD:
      return { ...state, keyword: action.payload };

    case ACTIONS.SET_RATING:
      return { ...state, rating: action.payload };

    default:
      return state;
  }
};

export default function useForm({ initialKeyword, initialRating }) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
  });

  const { keyword, rating } = state;

  const updateKeyword = useCallback(
    (keyword) => {
      dispatch({
        type: ACTIONS.SET_KEYWORD,
        payload: keyword,
      });
    },
    [dispatch]
  );

  const updateRating = useCallback(
    (rating) => {
      dispatch({
        type: ACTIONS.SET_RATING,
        payload: rating,
      });
    },
    [dispatch]
  );

  return {
    keyword,
    rating,
    updateKeyword,
    updateRating,
  };
}
