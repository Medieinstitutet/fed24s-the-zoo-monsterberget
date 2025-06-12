import react, { use } from "react";
import { createContext, useContext, useReducer } from "react";
import { Animal } from "../Types/Animal";

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
