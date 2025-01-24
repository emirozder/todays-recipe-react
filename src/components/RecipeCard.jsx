import { Heart } from "lucide-react";
import { useState } from "react";

const RecipeCard = ({ recipe, setSelectedRecipe, setFavorites }) => {
  const tagColors = ["bg-[#d8e2dc]", "bg-[#ffe5d9]", "bg-[#ffcad4]"];
  const difficultyColors = {
    Easy: "bg-green-500",
    Medium: "bg-yellow-500",
    Hard: "bg-red-500",
  };

  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites"))?.find(
      (fav) => fav.id === recipe.id
    )
  );

  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 2000);
  };

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.some((fav) => fav.id === recipe.id)) {
      favorites = favorites.filter((fav) => fav.id !== recipe.id);
      setIsFavorite(false);
      setFavorites && setFavorites(favorites);
      showToast("Recipe removed from favorites.");
    } else {
      favorites.push(recipe);
      setIsFavorite(true);
      setFavorites && setFavorites(favorites);
      showToast("Recipe added to favorites.");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <>
      <div
        className="card bg-base-100 shadow-xl hover:scale-[1.02]"
        onClick={() => {
          document.getElementById("recipe-modal").showModal();
          setSelectedRecipe(recipe);
        }}
      >
        <figure className="relative h-48">
          <div className="skeleton absolute inset-0" />
          <img
            src={recipe?.image}
            alt="img"
            className="opacity-0 transition-opacity duration-500"
            onLoad={(e) => {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.previousElementSibling.style.display = "none";
            }}
          />
          <div
            className="absolute top-2 right-2 bg-white bg-opacity-80 p-1 rounded-full cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addRecipeToFavorites();
            }}
          >
            {!isFavorite ? (
              <Heart
                size={20}
                className="hover:fill-red-500 hover:text-red-500"
              />
            ) : (
              <Heart size={20} className="fill-red-500 text-red-500" />
            )}
          </div>
          <div
            className={`absolute top-2 left-2 ${
              difficultyColors[recipe?.difficulty]
            } text-white badge badge-ghost border-none`}
          >
            {recipe?.difficulty}
          </div>
        </figure>
        <div className="card-body px-6 py-4 gap-0">
          <h2 className="card-title">
            <span>{recipe?.name}</span>
          </h2>
          <p>{recipe?.cuisine}</p>
          <div className="card-actions justify-start mt-2">
            {recipe?.tags?.slice(0, 3).map((tag, idx) => (
              <div key={tag} className={`badge badge-ghost ${tagColors[idx]}`}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {toastMessage && (
        <div className="toast toast-end z-10 transition-opacity">
          <div
            className={`alert ${
              toastMessage?.includes("added") ? "bg-green-300" : "bg-red-300"
            }`}
          >
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeCard;
