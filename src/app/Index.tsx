import { View, Text, FlatList } from 'react-native'
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
/*
 const ChildComponents = ({name,age,hobbies}) => { this will throw you an error in typescript,
  but still works

Interfaces in TypeScript are used to define the structure or shape of an object.
 They allow us to specify the names and types of properties that an object should have.
*/
const index = () => {
  const products=[
    {
      productName: "Product A",
      productImage:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 19.99,
      productDescription: "Description for Product A",
      isFeatured: true,
    },
    {
      productName: "Product B",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 199.99,
      productDescription: "Description for Product B",
      isFeatured: true,
    },
    {
      productName: "Product C",
      productImage:
        "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 90.99,
      productDescription: "Description for Product C",
      isFeatured: true,
    },
    {
      productName: "Product D",
      productImage:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 919.99,
      productDescription: "Description for Product D",
      isFeatured: true,
    },
  ]
  return (
    <FlatList 
    data={products} 
    renderItem = {({item})=>(
      <ChildComponents
      name ={item.productName}
      image={item.productImage}
      price={item.productPrice}
      description={item.productDescription}
      isFeatured={item.isFeatured}
      />
    )}
  />
);
};
export default index