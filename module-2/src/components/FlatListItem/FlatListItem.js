import * as React from 'react';
import { Switch, Text, FlatList} from 'react-native';

const FlatListItem = ({ item }) => {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <React.Fragment>
            <Switch
                value={isChecked}
                onChange={()=> setIsChecked(true)}
            />
            <Text style={[styles2.text, isChecked && styles2.strikeText]}>{item.text}</Text>
          
        </React.Fragment>
    )
}

const styles2 = {
    instruction: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15,
    },
    text: {
      marginHorizontal: 10,
      flex: 1,
    },
    strikeText: {
      color: '#bbb',
      textDecorationLine: 'line-through'
    },
    unstrikeText: {
      color: "#29323c"
    }
  }
  

export default FlatListItem;