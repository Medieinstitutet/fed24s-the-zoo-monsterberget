import type { AnimalContextType } from "../Contexts/AnimalContext";

type Action =
  | { type: "SET_ANIMALS"; payload: AnimalContextType[] }
  | { type: "FEED_ANIMAL"; payload: string };

export const animalReducer = (
  state: { animals: AnimalContextType[] },
  action: Action
) => {
  switch (action.type) {
    case "SET_ANIMALS":
      return { ...state, animals: action.payload };

    case "FEED_ANIMAL":
      const updatedAnimals = state.animals.map((animal) =>
        animal.id === action.payload
          ? {
              ...animal,
              isFed: true,
              lastFed: new Date().toISOString(),
            }
          : animal
      );
      return { ...state, animals: updatedAnimals };

    default:
      return state;
  }
};
