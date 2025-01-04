import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles  from '../utils/style'
const ButtonComponents = () => {
  return (
    <View>
        <Text> Exploring Buttons</Text>
      <TouchableOpacity style={[styles.button, styles.buttonText]} onPress={()=>{console.warn("Button is pressed")}}>
        <Text>Learn More</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonComponents