import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ViewComponents = () => {
  return (
    <>
    <View style={styles.container}>
      <Text>My name is Sindhu</Text>
    </View>
    <View style={styles.container}>
        <Text>My age is 18</Text>
    </View>
    <View style={styles.container}>
        <Text>My favorite subject is Maths</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 400,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10, // Add margin bottom to separate the views
  },
})

export default ViewComponents