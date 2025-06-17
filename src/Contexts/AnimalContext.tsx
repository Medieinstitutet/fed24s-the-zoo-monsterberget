import { createContext, useReducer, useEffect } from "react";
import { animalReducer } from "../Reducers/AnimalReducer";

export interface AnimalContextType {
  id: string;
  name: string;
  latinName: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
}
interface AnimalState {
  animals: AnimalContextType[];
}
type AnimalAction =
  | { type: "SET_ANIMALS"; payload: AnimalContextType[] }
  | { type: "FEED_ANIMAL"; payload: string };

const initialState: AnimalState = {
  animals: [],
};
export const AnimalContext = createContext<{
  state: AnimalState;
  dispatch: React.Dispatch<AnimalAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(animalReducer, initialState);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(
          "https://animals.azurewebsites.net/api/animals"
        );
        if (!response.ok) {
          throw new Error("Something went wrong while fetching animals");
        }
        const data: AnimalContextType[] = await response.json();
        dispatch({ type: "SET_ANIMALS", payload: data });
      } catch (error) {
        console.error(error);
      }
    };
    fetchAnimals();
  }, []);

  return (
    <AnimalContext.Provider value={{ state, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
};
