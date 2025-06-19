import type { AnimalContextType } from "../Contexts/AnimalContext";

export type State = {
  animals: AnimalContextType[];
};

export type Action =
  | { type: "SET_ANIMALS"; payload: AnimalContextType[] }
  | { type: "FEED_ANIMAL"; payload: string };

export const animalReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ANIMALS":
      localStorage.setItem("animals", JSON.stringify(action.payload));
      return { ...state, animals: action.payload };

    case "FEED_ANIMAL":
      const updatedAnimals = state.animals.map((animal) =>
        animal.id === action.payload
          ? {
              ...animal,
              isFed: true,
              lastFed: new Date(),
            }
          : animal
      );

      localStorage.setItem("animals", JSON.stringify(updatedAnimals));

      return { ...state, animals: updatedAnimals };

    default:
      return state;
  }
};
