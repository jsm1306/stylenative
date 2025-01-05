import { View, Text } from 'react-native'
import React from 'react'
import Name from './Name'
import Age from './Age'
import ImageComponents from '../components/ImageComponents'
import TextComponents from '../components/TextComponents'
import ExternalStyle from '../components/ExternalStyle'
import ArrayofObjects from '../components/ArrayofObjects'
import styles from '../utils/style'
import ChildComponents from '../components/ChildComponents'
import ParentComponents from '../components/ParentComponents'
const index = () => {
  return (
    <View style={styles.page}>
      
<ParentComponents/>
    </View>

  )
}

export default index