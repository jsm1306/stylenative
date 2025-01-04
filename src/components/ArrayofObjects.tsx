import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayofObjects = () => {
    const locations=[
        {name:'Location 1', address:'Address 1'},
        {name:'Location 2', address:'Address 2'},
        {name:'Location 3', address:'Address 3'},
        {name:'Location 4', address:'Address 4'},
        {name:'Location 5', address:'Address 5'},
    ]
  return (
    <View>
      <FlatList
        data={locations}
        renderItem={({item})=>(
            <View>
                <Text>{item.name}</Text>
                <Text>{item.address}</Text>
            </View>
        )}
        keyExtractor={(item)=>item.name}
        />
    </View>
  )
}

export default ArrayofObjects