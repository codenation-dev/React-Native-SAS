import * as React from 'react';
import {Text, Switch, StyleSheet, View} from 'react-native';

const StepInstruction = ({item, itemChecked}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    itemChecked(item, isChecked);
  }, [isChecked]);

  return (
    <View style={styles.item}>
      <Switch
        onValueChange={() => setIsChecked(!isChecked)}
        value={isChecked}
      />
      <Text style={isChecked ? [styles.text, styles.text_decoration] : styles.text}>
        {item.text}
      </Text>
    </View>
  );
};

export default StepInstruction;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  text: {
    marginBottom: 15,
    flex: 1
  },
  text_decoration: {
    textDecorationLine: "line-through",
    textDecorationStyle: "dotted",
    textDecorationColor: "#000"
  },
});
