import { Link } from "react-router";
import { getFeedingStatus } from "../utils/getFeedingStatus";
import { AnimalContext } from "../Contexts/AnimalContext";
import { useContext } from "react";

export const AnimalList = () => {
  const { state } = useContext(AnimalContext);

  if (!state.animals.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="animal-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {state.animals.map((animal) => {
        const feedingStatus = getFeedingStatus(animal.lastFed);

        return (
          <Link
            key={animal.id}
            to={`/animals/${animal.id}`}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition-all bg-white block"
          >
            <img
              src={animal.imageUrl}
              alt={animal.name}
              className="w-full h-48 object-cover rounded-md"
              onError={(e) =>
                (e.currentTarget.src = "/src/assets/images/fallback.jpg")
              }
            />
            <h2 className="text-xl font-semibold mt-2">{animal.name}</h2>
            <p className="text-gray-500 italic">{animal.shortDescription}</p>
            <p
              className={`mt-2 text-sm font-medium ${
                feedingStatus === "Mätt"
                  ? "text-green-600"
                  : feedingStatus === "Snart hungrig"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              Status: {feedingStatus}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
