import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import styles from '../utils/style';

interface Childprops {
  name: string;
  image: string;
  price: number;
  description: string;
  isFeatured: boolean;
}

const ChildComponents = ({ name, image, price, description, isFeatured }: Childprops) => {
  const handlePress = () => {
    console.log("Button pressed"); // Check if this gets logged in the console
    alert("Button is pressed"); // This will show the alert
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productname}>{name}</Text>
        <Text style={styles.productprice}>${price.toFixed(2)}</Text>
        <Text style={styles.productdescription}>{description}</Text>
        
        <TouchableOpacity 
          style={styles.TouchableOpacity} 
          onPress={handlePress} // On press, call the handlePress function
        >
          {isFeatured && <Text style={styles.productisfeatured}>Featured</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChildComponents;
