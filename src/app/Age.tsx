import React from 'react';
import styles from '../utils/style';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Attack on Titan Quiz</Text>
     <TouchableOpacity style={[styles.TouchableOpacity,styles.TouchableOpacityText]}onPress={()=>alert("You pressed me")}>
      <Text style={styles.TouchableOpacityText}>Press Me</Text>
      </TouchableOpacity> 
    </View>
  );
};
export default App;