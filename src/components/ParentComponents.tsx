import { View, Text } from 'react-native'
import React from 'react'
import ChildComponents from './ChildComponents'

const ParentComponents = () => {
  return (
    <View>
      <ChildComponents name="Sindhu"
      age={18}
      hobbies={['Piano ','Games ','Songs ']}/>
    </View>
  )
}

export default ParentComponents