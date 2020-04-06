/**
 * @flow
 */

import {useState, useEffect} from 'react';

const mapRecipe = () => recipe => ({
  title: recipe.title,
  url: recipe.href,
  ingredients: recipe.ingredients.split(', '),
});

const retrieveResults = () => data => data.results;

const fetchRecipes = () =>
  fetch('http://www.recipepuppy.com/api/')
    .then(response => response.json())
    .then(retrieveResults());

export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const saveRecipes = () => newRecipes => setRecipes(newRecipes);

  useEffect(() => {
    fetchRecipes().then(saveRecipes());
  }, []);

  return [recipes, setRecipes];
};
