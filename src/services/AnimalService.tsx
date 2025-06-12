import { useState, useEffect } from "react";
import { Animals } from "../Types/Animals";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export function useAnimals() {
  const [animals, setAnimals] = useState<Animals[]>([]);
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
  }, []);

  if (Isloading) {
    return <div className="text-8xl">Loading...</div>;
  }
  return (
    <div className="flex flex-wrap justify-center">
      {animals.map((animal) => (
        <div key={animal.id} className="m-4 p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">{animal.name}</h2>
          <p>{animal.shortDescription}</p>
          <img
            src={animal.imageUrl}
            alt={animal.name}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}
export default useAnimals;
