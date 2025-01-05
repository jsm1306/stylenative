import { View, Text } from 'react-native'
import React from 'react'

interface Childprops{
  name:string;
  age:number;
  hobbies:string[];
}
/*
 const ChildComponents = ({name,age,hobbies}) => { this will throw you an error in typescript,
  but still works

Interfaces in TypeScript are used to define the structure or shape of an object.
 They allow us to specify the names and types of properties that an object should have.
*/
const ChildComponents = ({name,age,hobbies}:Childprops) => {
  console.log("Hello "+ name)
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{hobbies}</Text>

    </View>
  )
}

export default ChildComponents