import { createContext, useContext, useReducer } from "react";
import { animalReducer } from "../Reducers/AnimalReducer";

const AnimalContext = createContext<any>(null);

export const AnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const [animals, dispatch] = useReducer(animalReducer, []);
  return (
    <AnimalContext.Provider value={{ animals, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
};
export const useAnimalContext = () => useContext(AnimalContext);
