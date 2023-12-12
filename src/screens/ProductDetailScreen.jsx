import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header/Header'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'


const ProductDetailScreen = ({ productId }) => {
  const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const productFounded = products_data.find(product => product.id === productId)
    setProductSelected(productFounded)
    setIsLoading(false)
  }, [productId])

  return (
    <>
      <Header title='Product Detail Screen' />

      {isLoading ?
        <ActivityIndicator />
        :
        <View style={styles.productDetailScreen}>

          <Text>{productSelected.title}</Text>
        </View>
      }
    </>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  productDetailScreen: {

  }
})