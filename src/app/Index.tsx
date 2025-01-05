import { View, Text } from 'react-native'
import React from 'react'
import Name from './Name'
import Age from './Age'
import ImageComponents from '../components/ImageComponents'
import TextComponents from '../components/TextComponents'
import ExternalStyle from '../components/ExternalStyle'
import ArrayofObjects from '../components/ArrayofObjects'
import styles from '../utils/style'
const index = () => {
  return (
    <View style={styles.page}>
      <Age/>
    </View>

  )
}

export default index