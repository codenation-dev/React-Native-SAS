import * as React from 'react';

import {act, create as render} from 'react-test-renderer';

import Recipes from '../Recipes';
import App from '../App';

import stub from './recipes.stub';

describe('integration | App', () => {
  beforeAll(() => {
    fetch.mockReturnValue(
      Promise.resolve({
        json: () => stub,
      }),
    );
  });

  describe('when the app is rendering and the recipes were loaded from data api', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    it('renders all recipes been fetched', async () => {
      const app = render(<App />);

      await act(async () => {
        jest.runAllTimers();
      });

      const recipesComponent = app.root.findByType(Recipes);

      expect(recipesComponent.props.recipes).toEqual(
        stub.results.map(recipe => ({
          title: recipe.title,
          url: recipe.href,
          ingredients: recipe.ingredients.split(', '),
        })),
      );
    });

    it('renders the first recipe as been fetched', async () => {
      const app = render(<App />);
      const instance = app.root;

      await act(async () => {
        jest.runAllTimers();
      });

      const [recipeInstance] = instance.findAllByProps({testID: 'recipe'});

      const [recipeTitle] = recipeInstance.findByProps({
        testID: 'recipeTitle',
      }).children[0].children;

      const [recipeURL] = recipeInstance.findByProps({
        testID: 'recipeURL',
      }).children[0].children;

      const ingredients = recipeInstance
        .findAllByProps({testID: 'ingredient'})
        .map(({children: [ingredient]}) => ingredient)
        .filter(ingredient => typeof ingredient === 'string')
        .map(ingredient => ingredient.split('\u2022 ').join(''));

      const [firstRecipe] = stub.results;

      const recipe = {
        ingredients,
        title: recipeTitle,
        href: recipeURL,
      };

      expect(recipe).toEqual({
        title: firstRecipe.title,
        href: firstRecipe.href,
        ingredients: firstRecipe.ingredients.split(', '),
      });
    });

    it('renders all urls to every recipes', async () => {
      const app = render(<App />);

      await act(async () => {
        jest.runAllTimers();
      });

      const allURLs = stub.results.map(recipe => recipe.href);

      const urls = app.root
        .findAllByProps({testID: 'recipeURL'})
        .map(({children: [url]}) => url)
        .filter(url => typeof url === 'string');

      expect(urls).toEqual(allURLs);
    });

    it('renders all ingredients to every recipes', async () => {
      const app = render(<App />);

      await act(async () => {
        jest.runAllTimers();
      });

      const allIngredients = stub.results.flatMap(recipe =>
        recipe.ingredients.split(', '),
      );

      const ingredients = app.root
        .findAllByProps({testID: 'ingredient'})
        .map(({children: [ingredient]}) => ingredient)
        .filter(ingredient => typeof ingredient === 'string')
        .map(ingredient => ingredient.split('\u2022 ').join(''));

      expect(ingredients).toEqual(allIngredients);
    });

    afterAll(() => {
      jest.useRealTimers();
    });
  });

  afterEach(() => {
    fetch.mockClear();
  });
});
