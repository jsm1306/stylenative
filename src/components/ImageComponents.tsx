import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

//This interface defines the structure of an object in the product list
interface Item {
  name: string;
  price: number;
  image: string;
}
// rendering function takes item of type Item as input
// The source prop is an object containing a uri key pointing to the image URL.
const rendering = ({item}: {item: Item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Image source={{uri:item.image}} style={{width:100, height:100}}/>
    </View>
  )
}
const ImageComponents = () => {
  const product=[
    {
      name: 'Product 1',
      price: 100,
      image: 'https://c02.purpledshub.com/uploads/sites/40/2023/08/JI230816Cosmos220-6d9254f-edited-scaled.jpg?w=1455&webp=1'
    },
    {
      name: 'Product 2',
      price: 200,
      image: 'https://tse4.mm.bing.net/th?id=OIP.Vtxy0FjT_EfudI4cQk1kzAHaE8&pid=Api&P=0&h=180'
    },
    {
      name: 'Product 3',
      price: 300,
      image: 'https://c02.purpledshub.com/uploads/sites/40/2023/08/JI_110219_HardyCyclamens_046vsharpened-564d9c1-edited-1-scaled.jpg?webp=1&w=1200'
    },
    {
      name: 'Product 4',
      price: 400,
      image: 'https://c02.purpledshub.com/uploads/sites/40/2023/08/MdR_1317_053_Viburnum_bodnantense_Charles_Lamont_MaaykeDeRidder-06d643f-edited-scaled.jpg?webp=1&w=1200'
    },
    {
      name: 'Product 5',
      price: 350,
      image: 'https://c02.purpledshub.com/uploads/sites/40/2023/06/GettyImages-1218212878-40af040.jpg?webp=1&w=1200'
    }
  ]
  return (
    <View>
      <FlatList data={product} keyExtractor={(item,index)=>index.toString()}
        renderItem={rendering}/>
    </View>
  )
}

export default ImageComponents