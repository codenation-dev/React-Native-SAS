import * as React from 'react';

import {Text, FlatList, View, TouchableOpacity, Switch} from 'react-native';

import styles from '../../styles';

import { StatusContext } from '../../App';

const StepInstructions = ({children}) => {
  const [listView, setlistView] = React.useState(false);
  const {isEnabled, setIsEnabled} = React.useContext(StatusContext);
  const {setBlock} = React.useContext(StatusContext);

  const toggleSwitch = (id) => {
      setIsEnabled(statusChange(id));
  }

  const statusChange = (id) => isEnabled.map(elem => {
    if(elem.id == id) elem.status = true
    return elem
  })

  const findStatus = (id) => isEnabled.filter(elem => {
    if(elem.id == id) return elem
  })

  const stateSwitch = children.map(elem => ({ id: elem.id , status: false }));

  const blockScreen = () => {
    if(isEnabled.length === 14) {
      const testArray = isEnabled.filter(elem => {
        if(elem.status == false) return elem
      })
      if(testArray.length === 0) setBlock(true)     
  
    }
  };

  React.useEffect(() => {
    if(isEnabled.length < 14) setIsEnabled([...isEnabled,...stateSwitch])
    blockScreen()

  },[])

  return (
    <View style={styles.instructionsContainer}>
        <TouchableOpacity onPress={() => setlistView(!listView)}>
            { listView ? 
              <Text style={styles.instructionsTitle}>MOSTRAR INSTRUÇÕES</Text> 
              : <Text style={styles.instructionsTitle}>ESCONDER INSTRUÇÕES</Text> 
            }
        </TouchableOpacity>
      {
        listView ? 
        <FlatList
          data={children}
          renderItem={({item}) => <View style={styles.eachInstructionContainer}> 
              <Switch
                style={{ transform:[{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                trackColor={{ false: "#767577", true: "#6DE36B" }}
                thumbColor={"#fff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(item.id)}
                value={findStatus(item.id)[0].status}
              />
            <Text style={findStatus(item.id)[0].status > 0 ? styles.instructionTextExecuted : styles.instructionText}>{item.text}</Text>
          </View> }
      /> : null
      }
      
    </View>
  );
};

export default StepInstructions;

