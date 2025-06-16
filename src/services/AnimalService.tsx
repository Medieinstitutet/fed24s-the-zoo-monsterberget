import { useState, useEffect } from "react";
import { Animals } from "../Types/Animals";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export function AnimalService() {
  const [Animals, setAnimals] = useState<Animals[]>([]);
  const [Isloading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Animals[] = (await response.json()) as Animals[];
        setAnimals(data);
      } catch (error) {
        console.error("Error fetching animals:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnimals();
  }, [Animals]);
  if (Isloading) {
    return <div>Loading...</div>;
  }
  return Animals;
}
