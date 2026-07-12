import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

 const recipes = [
  {
    id: 1,
    name: "Sel Roti",
    image: "https://assets-cdn.kathmandupost.com/uploads/source/news/2019/lifestyle/ThomasHEaton.jpg",
    cookingTime: "1 hour 30 minutes",
    difficulty: "Hard",
    ingredients: ["Rice flour","Sugar","Milk","Ghee","Cardamom","Cooking oil",
    ],
    instructions: [
      "Mix rice flour, sugar, milk, ghee, and cardamom into a smooth batter.",
      "Let the batter rest for about 1 hour.",
      "Heat oil in a deep frying pan.",
      "Pour the batter carefully into the oil in a circular ring shape.",
      "Fry until both sides are golden brown.",
      "Serve warm with yogurt or tea.",
    ],
  },

  {
    id: 2,
    name: "Chicken MoMo",
    image: "https://t3.ftcdn.net/jpg/06/49/25/26/360_F_649252668_AcwaAGxraSFmNbr5C20hDpTwz1qoi7RF.jpg",
    cookingTime: "1 hour",
    difficulty: "Medium",
    ingredients: ["Chicken mince","MoMo wrappers","Onion","Garlic","Ginger","Coriander",],
    instructions: [
      "Mix chicken mince with chopped onion, garlic, ginger, and coriander.",
      "Place a spoonful of filling onto each wrapper.",
      "Fold and seal the MoMos tightly.",
      "Steam for 12–15 minutes.",
      "Prepare spicy tomato achar.",
      "Serve hot with the dipping sauce.",
    ],
  },

  {
    id: 3,
    name: "Gundruk Sadheko",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLjkZgTkNjDFCParSwWc08J9g-RBnbd6XgLcil2V-RwufiJZklBR5GKOJ&s=10",
    cookingTime: "20 minutes",
    difficulty: "Easy",
    ingredients: ["Gundruk","Onion","Tomato","Green chili","Mustard oil","Lemon juice",],
    instructions: [
      "Soak the gundruk in warm water for 10 minutes.",
      "Drain the water and squeeze well.",
      "Mix with chopped onion, tomato, and green chili.",
      "Add mustard oil and lemon juice.",
      "Mix thoroughly.",
      "Serve as a side dish with rice.",
    ],
  },

  {
    id: 4,
    name: "Yomari",
    image: "https://annapurnaexpress.prixacdn.net/media/albums/Yomari_S3JjrJKZ96.jpg",
    cookingTime: "1 hour 15 minutes",
    difficulty: "Hard",
    ingredients: ["Rice flour","Warm water","Chaku","Sesame seeds","Ghee",],
    instructions: [
      "Prepare a soft dough using rice flour and warm water.",
      "Mix chaku and sesame seeds for the filling.",
      "Shape the dough into a cone.",
      "Fill with the sweet mixture.",
      "Seal carefully.",
      "Steam for about 15 minutes and serve warm.",
    ],
  },

  {
    id: 5,
    name: "Choila",
    image: "https://barmandoo.com.np/products-images/6579beb1cb1011bbfe025cd7_1714853847625.png",
    cookingTime: "35 minutes",
    difficulty: "Medium",
    ingredients: ["Buff meat or chicken","Mustard oil","Garlic","Ginger","Green chili","Fenugreek seeds",],
    instructions: [
      "Grill or roast the meat until cooked.",
      "Cut into bite-sized pieces.",
      "Heat mustard oil with fenugreek seeds.",
      "Mix meat with garlic, ginger, and chili.",
      "Pour the hot oil over the mixture.",
      "Serve with beaten rice (Chiura).",
    ],
  },

  {
    id: 6, name: "Kheer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQzUjW4b5MIzs5TLAWEc8K5U5I022t_co85cdFsjTGx6EXCNfa7oUdp0&s=10",
    cookingTime: "45 minutes", difficulty: "Easy",
    ingredients: ["Rice","Milk","Sugar","Cardamom","Cashews","Raisins",],
    instructions: [
      "Boil the milk in a large pot.",
      "Add washed rice and cook on low heat.",
      "Stir frequently until the rice becomes soft.",
      "Add sugar and cardamom.",
      "Mix in cashews and raisins.",
      "Serve warm or chilled.",
    ],
  },

  {
    id: 7, name: "Aloo Tama",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwjFJak3fBKsAsWdosjEkgO3knVV7EeVlnOzPXOwRl75sCor708FfaIK9OOpWqZRhyphenhyphen3wh7E8zDfJqikRZko7QRITFQXB4IvTruEIER-VNap3_42gpzBfgIXicb-kj-OH1e9d-M6wFndng/w1200-h630-p-k-no-nu/IMG_4061_E1.JPG",
    cookingTime: "50 minutes", difficulty: "Medium",
    ingredients: ["Potatoes","Bamboo shoots","Black-eyed beans","Tomato","Turmeric","Garlic",],
    instructions: [
      "Boil the potatoes and black-eyed beans.",
      "Cook garlic and tomato with spices.",
      "Add bamboo shoots and simmer.",
      "Mix in the potatoes and beans.",
      "Cook for another 10 minutes.",
      "Serve hot with steamed rice.",
    ],
  },
];

  const filteredRecipes = recipes.filter((recipe) => {
  const matchesSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || recipe.difficulty === difficulty;

    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyColor = (level) => {
    if (level === "Easy") {
      return "bg-green-100 text-green-700";
    }

    if (level === "Medium") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-red-100 text-red-700";
  };

  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-orange-50 px-5 py-10">
        <div className="mx-auto max-w-4xl">
          <button
            onClick={() => setSelectedRecipe(null)}
            className="mb-6 rounded-lg bg-white px-5 py-2 font-semibold text-stone-700 shadow hover:bg-stone-100"
          >
            ← Back to Food
          </button>

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <img src={selectedRecipe.image} alt={selectedRecipe.name}className="h-80 w-full object-cover"/>

            <div className="p-7 md:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-3xl font-bold text-stone-900 md:text-4xl">{selectedRecipe.name}</h1>

                <span
                  className={`w-fit rounded-full px-4 py-2 text-sm font-bold ${getDifficultyColor(selectedRecipe.difficulty)}`}>
                  {selectedRecipe.difficulty}
                </span>
              </div>

              <p className="mt-4 flex items-center gap-2 text-lg text-stone-600">
                <i className="fa-solid fa-clock text-back mr-2"></i>

                <span>Cooking time:</span>

                <span className="font-semibold">{selectedRecipe.cookingTime}</span>
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-stone-900">Ingredients</h2>

                  <ul className="grid grid-cols-2 gap-3">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index}
                        className="flex items-center gap-2 rounded-lg bg-orange-50 px-3 py-3 text-sm text-stone-700">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-red-500"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-4 text-2xl font-bold text-stone-900">Receipe</h2>
                  <ol className="space-y-4">
                    {selectedRecipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-4 text-stone-700">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                          {index + 1}
                        </span>
                        <p className="pt-1">{instruction}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-stone-900 md:text-5xl">MyRecipe</h1>
        </header>

        <div className="mb-10 grid gap-4 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-[1fr_220px_180px]">
          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-700">Search</label>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the recipe"
              className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-700">Difficulty</label>
            <select value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none focus:border-orange-500">
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-stone-700">Total Recipes</label>
            <div className="flex h-[50px] items-center justify-center rounded-lg bg-orange-100 text-xl font-bold text-stone-700">{filteredRecipes.length}</div>
          </div>
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative">
                  <img src={recipe.image} alt={recipe.name} className="h-56 w-full object-cover"/>

                  <span className={`absolute right-4 top-4 rounded-full px-4 py-2 text-xs font-bold ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <h2 className="text-xl font-bold text-stone-900">
                      {recipe.name}
                    </h2>

                    <p className="flex shrink-0 items-center gap-2 text-sm font-semibold text-stone-600">
                      <i className="fa-solid fa-clock text-black mr-2"></i>
                      {recipe.cookingTime}
                    </p>
                  </div>

                  <h3 className="mb-3 font-bold text-stone-900">Ingredients</h3>

                  <ul className="mb-6 grid grid-cols-2 gap-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2 rounded-lg  px-3 py-2 text-sm text-stone-700">
                        <span className="h-2 w-2 shrink-0 rounded bg-red-500"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>

                  <button onClick={() => setSelectedRecipe(recipe)}
                    className="flex w-full items-center justify-between rounded-lg bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-green-500">
                    <span>View Recipe</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">
              No recipes found
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;