/**
 * @flow
 */

import * as React from 'react';
import {Text, View} from 'react-native';

const Recipes = ({recipes}) => {
  return (
    <View testID="recipes">
      {recipes.map(item => (
        <View
          testID="recipe"
          key={item.url}
          style={{marginTop: 32, paddingHorizontal: 24}}>
          <Text
            testID="recipeTitle"
            style={{fontSize: 24, fontWeight: '600', color: '#000'}}>
            {item.title}
          </Text>
          <Text
            testID="recipeURL"
            style={{
              marginTop: 8,
              fontSize: 18,
              fontWeight: '400',
              color: '#444',
            }}>
            {item.url}
          </Text>
          <View testID="ingredients">
            {item.ingredients.map((ingredient, i) => (
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