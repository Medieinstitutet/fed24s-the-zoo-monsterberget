import { Animals } from "../Types/Animals";

type Action =
  | { type: "SET_ANIMALS"; payload: Animals[] }
  | { type: "FEED_ANIMAL"; payload: Animals };

export const animalReducer = (state: Animals[], action: Action): Animals[] => {
  switch (action.type) {
    case "SET_ANIMALS":
      return action.payload;
    case "FEED_ANIMAL":
      return state.map((a) =>
        a.id === action.payload.id ? { ...a, ...action.payload } : a
      );
    default:
      return state;
  }
};
