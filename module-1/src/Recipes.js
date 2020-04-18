/**
 * @flow
 */

import * as React from 'react';
import {Text, View, Linking} from 'react-native';

const Recipes = ({recipes}) => {
  const allIngredients = recipes.reduce(
    (ingredients, recipe) => [
      ...ingredients,
      ...recipe.ingredients.filter(
        ingredient => !ingredients.includes(ingredient),
      ),
    ],
    [],
  );

  return (
    <View testID="recipes">
      {recipes.map(recipe => (
        <View
          testID="recipe"
          key={recipe.url}
          style={{marginTop: 32, paddingHorizontal: 24}}>
          <Text
            testID="recipeTitle"
            style={{fontSize: 24, fontWeight: '600', color: '#000'}}>
            {recipe.title}
          </Text>
          <Text
            testID="recipeURL"
            style={{
              marginTop: 8,
              fontSize: 18,
              fontWeight: '400',
              color: '#444',
            }}
            onPress={() => {
              Linking.openURL(recipe.url);
            }}>
            {recipe.url}
          </Text>
          <View testID="ingredients">
            {recipe.ingredients.map((ingredient, i) => (
              <Text
                testID="ingredient"
                key={i + ingredient}
                style={{fontWeight: '700'}}>
                {`\u2022 ${ingredient}`}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Recipes;
