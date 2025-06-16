import { useFetchAnimals } from "../Hooks/UseFetchAnimals";
import { Link } from "react-router";

export const AnimalList = () => {
  const { loading, animals, error } = useFetchAnimals();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="animal-list grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-6 p-4">
      {animals.map((animal) => (
        <Link
          to={`/Animals/${animal.id}`}
          className="animal-link"
          key={animal.id}
        >
          <div className="animal-card bg-gray rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-150">
            <img
              src={animal.imageUrl}
              alt={animal.name}
              onError={(e) =>
                (e.currentTarget.src =
                  "/fed24s-the-zoo-monsterberget/src/assets/images/fallback.jpg")
              }
            />
            <h2>{animal.name}</h2>
            <p>{animal.shortDescription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
