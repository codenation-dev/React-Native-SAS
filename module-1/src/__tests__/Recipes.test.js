import * as React from 'react';

import {create as render} from 'react-test-renderer';

import Recipes from '../Recipes';

const mockRecipes = [
  {
    title: 'First sweet cake',
    url: 'http://sweet.cake.com/1',
    ingredients: ['bilu', 'coconut'],
  },
  {
    title: 'Sweet pretty cake',
    url: 'http://sweet.cake.com/2',
    ingredients: ['bilula', 'coconut'],
  },
];

describe('unit | Recipes', () => {
  describe('when the recipes are rendering', () => {
    it('renders all received recipes', () => {
      const app = render(<Recipes recipes={mockRecipes} />);

      const {
        children: [recipes],
      } = app.root.findByProps({testID: 'recipes'});

      expect(recipes.children).toHaveLength(mockRecipes.length);
    });

    it('renders the first recipe', () => {
      const app = render(<Recipes recipes={mockRecipes} />);
      const instance = app.root;

      const [firstRecipe] = mockRecipes;

      const [recipeInstance] = instance.findAllByProps({testID: 'recipe'});
      const [recipeTitle] = recipeInstance.findByProps({
        testID: 'recipeTitle',
      }).children[0].children;
      const [recipeURL] = recipeInstance.findByProps({
        testID: 'recipeURL',
      }).children[0].children;
      const recipeIngredients = recipeInstance
        .findAllByProps({testID: 'ingredient'})
        .map(({children: [ingredient]}) => ingredient)
        .filter(ingredient => typeof ingredient === 'string')
        .map(ingredient => ingredient.split('\u2022 ').join(''));

      const recipe = {
        title: recipeTitle,
        url: recipeURL,
        ingredients: recipeIngredients,
      };

      expect(recipe).toEqual(firstRecipe);
    });

    it('renders the ingredients for all recipes', () => {
      const app = render(<Recipes recipes={mockRecipes} />);

      const allIngredients = mockRecipes.flatMap(recipe => recipe.ingredients);

      const ingredients = app.root
        .findAllByProps({testID: 'ingredient'})
        .map(({children: [ingredient]}) => ingredient)
        .filter(ingredient => typeof ingredient === 'string')
        .map(ingredient => ingredient.split('\u2022 ').join(''));

      expect(ingredients).toEqual(allIngredients);
    });
  });
});
