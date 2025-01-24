import { Search } from "lucide-react";
import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeDetailsModal from "../components/RecipeDetailsModal";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearchOnFavorites = (e) => {
    e.preventDefault();
    const searchQuery = e.target[0].value;
    const searchResult = JSON.parse(localStorage.getItem("favorites")).filter(
      (fav) => fav.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFavorites(searchResult);
  };

  return (
    <>
      <div className="flex-1 p-10 ml-0 sm:ml-24 md:ml-64 min-h-screen">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex justify-center">
            <form
              onSubmit={handleSearchOnFavorites}
              className="w-full sm:w-3/4"
            >
              <label className="input shadow-md flex items-center gap-2">
                <Search size={20} />
                <input
                  type="text"
                  className="text-sm md:text-md grow"
                  placeholder="Search on your Favorites"
                />
              </label>
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {favorites?.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                setSelectedRecipe={setSelectedRecipe}
                setFavorites={setFavorites}
              />
            ))}
          </div>

          {favorites.length === 0 && (
            <div>
              <h1 className="text-center text-2xl text-gray-800 font-semibold">
                No favorites found!
              </h1>
            </div>
          )}
        </div>
      </div>

      <RecipeDetailsModal recipe={selectedRecipe} />
    </>
  );
};

export default FavoritesPage;
