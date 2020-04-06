import {useState, useEffect} from 'react';
import {act} from 'react-test-renderer';

import {useRecipes} from '../useRecipes';

jest.mock('react');

describe('unit | useRecipes', () => {
  describe('when is using recipes', () => {
    beforeAll(() => {
      useState.mockReturnValue([]);
    });

    it('uses recipes as state', () => {
      useRecipes();

      expect(useState).toHaveBeenCalledWith([]);
    });

    it('uses an effect to gets recipes only once', () => {
      useRecipes();

      expect(useEffect).toHaveBeenCalledWith(expect.anything(), []);
    });

    it('retrieves the recipes listing', () => {
      const mockRecipes = [
        {
          title: 'Cake',
          href: 'https://recipe.com/cake',
          ingredients: ['chocolate', 'strawberry'],
          description: 'A dream cake',
        },
      ];

      useState.mockReturnValueOnce([mockRecipes]);

      const [recipes] = useRecipes();

      expect(recipes).toEqual(mockRecipes);
    });

    describe('and fetching recipes', () => {
      it('fetches the recipes to api', () => {
        fetch.mockReturnValueOnce(
          Promise.resolve({
            json: () => ({
              results: [],
            }),
          }),
        );

        useEffect.mockImplementationOnce(effect => effect());
        useState.mockReturnValueOnce([]);

        useRecipes();

        expect(fetch).toHaveBeenCalledWith('http://www.recipepuppy.com/api/');
      });

      it('retrieves json from data been fetched', async () => {
        const json = () => ({
          results: [],
        });

        const response = {
          json: jest.fn(json),
        };

        fetch.mockReturnValueOnce(Promise.resolve(response));

        useEffect.mockImplementationOnce(effect => effect());
        useState.mockReturnValueOnce([]);

        await act(async () => {
          useRecipes();
        });

        expect(response.json).toHaveBeenCalled();
      });
    });

    describe('and saving the mapping recipes from data been fetched', () => {
      it('saves recipes at the state', async () => {
        const setRecipes = jest.fn();
        const mockRecipes = [
          {
            title: 'Cake',
            href: 'https://recipe.com/cake',
            ingredients: 'chocolate, strawberry',
          },
        ];

        fetch.mockReturnValueOnce(
          Promise.resolve({
            json: () => ({
              results: mockRecipes,
            }),
          }),
        );

        useEffect.mockImplementationOnce(effect => effect());
        useState.mockReturnValueOnce([[], setRecipes]);

        await act(async () => {
          useRecipes();
        });

        expect(setRecipes).toHaveBeenCalledWith([
          {
            title: 'Cake',
            url: 'https://recipe.com/cake',
            ingredients: ['chocolate', 'strawberry'],
          },
        ]);
      });
    });

    afterAll(() => {
      jest.unmock('react');
      useState.mockClear();
      useEffect.mockClear();
    });
  });
});
