import { View, Text } from 'react-native'
import React from 'react'

const DynamicComponents = () => {
    const name = "Sindhu"
    const multiply =(a:number,b:number)=>a*b;
  return (
    <View>
      <Text>DynamicComponent :</Text>
      <Text>My name is: {name}</Text>
        <Text>2 * 3 = {multiply(2,3)}</Text>
    </View>
  )
}

export default DynamicComponents