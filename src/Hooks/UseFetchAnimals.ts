
import { useEffect, useState } from "react";

interface Animal {
  id: number;
  name: string;
  latinName: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  isfed: boolean;
  lastFed: Date;
}

export const useFetchAnimals = () => {
  const [loading, setLoading] = useState(true);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch("https://animals.azurewebsites.net/api/animals");
        if (!response.ok) {
          throw new Error("something went wrong while fetching animals");
        }
        const data: Animal[] = await response.json();
        setAnimals(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }   
}
    fetchAnimals();
  }
  , []);
  return { loading, animals, error };
};