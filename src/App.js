// TUTORIAL LINK: https://www.youtube.com/watch?v=U9T6YkEDkMo&t=459s

import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '49d151e7';
  const APP_KEY = '486f3eee1c89b97dbc72958c49f4fe6a';
  // Normally, use environment tools to protect your app id and app key - google more about this

  // CREATE OUR STATE!!!!
  // Recipes:
  const [recipes, setRecipes] = useState([]);
  // Search box for handleChange
  const [search, setSearch] = useState('');
  // User input for handleSubmit and API call
  const [userInput, setUserInput] = useState('');


  useEffect(() => {
    getRecipes();
  },[userInput]);
  // When our app renders the firts time, this useEffect runs
  // This useEffect also runs whenever we re-render our page
  // Now we can modify this and run it at certain points
  // Recall: if you want it to run once only when page initially re-renders, add [] as a second argument - this will ensure that our page only fetchs our data on page load, not at every re-render!
  // Recall: YOu can also add values into your empty array - whenever these values change, the useEffect is run

  // Create a function to fetch our data from our API
  const getRecipes = async () => {
    // Grab your data
    const response = await fetch(`https://api.edamam.com/search?q=${userInput}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    // Convert your data into a json object to make it easier to handle
    // Any external fetch you're catching needs to use await because they are asynchronous (creates order in our requests)
    const data = await response.json();

    // Set our state object recipes to data.hits
    // Result: our state includes all recipes!
    setRecipes(data.hits);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserInput(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form 
        className="search-form" 
        onSubmit={handleSubmit}
      >
        <input 
          className="search-bar" 
          type="text" 
          name="" 
          id=""
          onChange={handleChange}
        />
        <button 
          className="search-button" 
          type="submit"
        >
            Submit
        </button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.title}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
