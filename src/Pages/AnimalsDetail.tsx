import { useParams } from "react-router";
import { useContext } from "react";
import { AnimalContext } from "../Contexts/AnimalContext";

export const AnimalDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useContext(AnimalContext);
  const animal = state.animals.find((a) => String(a.id) === id);

  if (!animal) {
    return <p>Djur kunde inte hittas.</p>;
  }
  const hoursSinceFed =
    (new Date().getTime() - new Date(animal.lastFed).getTime()) /
    (1000 * 60 * 60);
  const canFeed = hoursSinceFed >= 4;

  const handleFeed = () => {
    if (canFeed) {
      dispatch({ type: "FEED_ANIMAL", payload: animal.id });
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img
        src={animal.imageUrl}
        alt={animal.name}
        onError={(e) =>
          (e.currentTarget.src =
            "/fed24s-the-zoo-monsterberget/src/assets/images/fallback.jpg")
        }
        className="w-full rounded shadow-md"
      />
      <h1 className="text-3xl font-bold mt-4">{animal.name}</h1>
      <button
        disabled={!canFeed}
        onClick={handleFeed}
        className={`px-4 py-2 mt-2 ${
          canFeed ? "bg-green-500" : "bg-gray-400"
        } text-white rounded`}
      >
        {canFeed ? "Mata djuret" : animal.name + " har precis blivit matad"}
      </button>
      <p className="italic text-sm mb-2">{animal.latinName}</p>
      <p className="mb-4">{animal.longDescription}</p>
    </div>
  );
};
