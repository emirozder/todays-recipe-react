import {
  CookingPot,
  HeartPulse,
  ShoppingBasket,
  Soup,
  Star,
  Timer,
  Utensils,
  Youtube,
} from "lucide-react";

const RecipeDetailsModal = ({ recipe }) => {
  return (
    <dialog id="recipe-modal" className="modal modal-middle sm:modal-middle">
      <div className="modal-box max-w-none sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img
            src={recipe?.image}
            alt="img"
            className="size-40 sm:size-60 rounded-xl mx-auto shadow-xl"
          />
          <div className="flex flex-col mx-auto">
            <p className="font-bold text-xl sm:text-2xl mt-2 md:mt-0 text-center">
              {recipe?.name}
            </p>
            <div className="flex gap-4 sm:gap-8 sm:items-center justify-center mt-2 text-nowrap">
              <div className="flex items-center gap-1 font-medium text-lg">
                <Star size={18} className="text-orange-400" />
                {recipe?.rating}
              </div>
              <div className="flex items-center gap-1 font-medium text-lg">
                <Utensils size={18} className="text-slate-400" />
                {recipe?.servings} Servings
              </div>
              <div className="flex items-center gap-1 font-medium text-lg">
                <HeartPulse size={18} className="text-red-400" />
                {recipe?.caloriesPerServing} cal
              </div>
            </div>
            <div className="flex gap-4 sm:gap-8 items-center mx-auto text-nowrap">
              <div className="flex items-center gap-1 font-medium text-lg">
                <Timer size={18} className="text-blue-600" />
                {recipe?.prepTimeMinutes} mins prep
              </div>
              <div className="flex items-center gap-1 font-medium text-lg">
                <CookingPot size={18} className="text-green-600" />
                {recipe?.cookTimeMinutes} mins cook
              </div>
            </div>
            <div className="flex items-center justify-center h-full">
              <a
                href={`https://www.youtube.com/results?search_query=${recipe?.name} recipe`}
                target="_blank"
                className="flex items-center justify-center gap-2 mt-3 md:mt-0 text-red-600 outline-none"
              >
                <Youtube size={24} />
                Click here to watch the recipe video!
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:ml-4">
            <h2 className="flex items-center gap-2 font-bold text-lg mt-4">
              <ShoppingBasket size={18} />
              Ingredients
            </h2>
            <ul className="list-disc ml-4 mt-2">
              {recipe?.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="flex items-center gap-2 font-bold text-lg mt-4">
              <Soup size={18} />
              Instructions
            </h2>
            <ol className="list-decimal ml-4 mt-2">
              {recipe?.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default RecipeDetailsModal;
