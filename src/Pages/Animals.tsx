import React from "react";
import { useAnimals } from "../services/Animalservice";
import { AnimalService } from "../services/AnimalService";

export const Animals = () => {
  return (
    <>
      <h1>Animals</h1>
      <AnimalService />
    </>
  );
};

export default Animals;
