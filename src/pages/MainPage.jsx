import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeDetailsModal from "../components/RecipeDetailsModal";

const MainPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    try {
      const res = searchQuery
        ? await fetch(`https://dummyjson.com/recipes/search?q=${searchQuery}`)
        : await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    const searchQuery = e.target[0].value;
    fetchRecipes(searchQuery);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="flex-1 p-10 ml-0 sm:ml-24 md:ml-64 min-h-screen">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex justify-center">
            <form onSubmit={handleSearchRecipe} className="w-full sm:w-3/4">
              <label className="input shadow-md flex items-center gap-2">
                <Search size={20} />
                <input
                  type="text"
                  className="text-sm md:text-md grow"
                  placeholder="Search for Today's Recipe"
                />
              </label>
            </form>
          </div>

          <h1 className="font-semibold text-md sm:text-2xl lg:text-3xl mt-5 text-center">
            Welcome to the Today's Recipe App!
          </h1>
          <p className="font-semibold text-sm sm:text-lg lg:text-xl mt-2 mb-10 text-center">
            Browse through the recipes and add your favorite ones to the list.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {!loading &&
              recipes?.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  setSelectedRecipe={setSelectedRecipe}
                />
              ))}
            {loading &&
              [...Array(9)].map((_, index) => (
                <div key={index} className="flex flex-col gap-4 w-full">
                  <div className="skeleton h-48 w-full bg-[#e3d5ca]"></div>
                  <div className="flex justify-between">
                    <div className="skeleton h-4 w-4/5 bg-[#e3d5ca]"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="skeleton h-4 w-1/5 bg-[#e3d5ca]"></div>
                    <div className="skeleton h-4 w-1/5 bg-[#e3d5ca]"></div>
                    <div className="skeleton h-4 w-1/5 bg-[#e3d5ca]"></div>
                  </div>
                </div>
              ))}
          </div>
          {!loading && recipes.length === 0 && (
            <div className="flex items-center justify-center w-full h-[50vh] gap-2">
              <h1 className="text-center text-2xl text-gray-800 font-semibold">
                No recipes found!
              </h1>
            </div>
          )}
        </div>
      </div>

      <RecipeDetailsModal recipe={selectedRecipe} />
    </>
  );
};

export default MainPage;
