import { Text, StyleSheet, View, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import products_data from '../data/products_data.json'
import { colors } from '../global/colors'
import ProductItem from '../components/ProductItem/ProductItem'


const ProductsByCategoryScreen = ({ category }) => {
  const [productsByCategory, setProductsByCategory] = useState([])

  useEffect(() => {
    const productsFilteredByCategory = products_data.filter(product => product.category.toLowerCase() === category.toLowerCase())
    setProductsByCategory(productsFilteredByCategory)
  }, [category])


  const renderProductItem = ({ item }) => (
    <ProductItem product={item} />
  )

  return (
    <>
      <Header title='Products' />
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
  productsByCategoryScreen: {
  },
  itemTitle: {
    color: colors.greyLabel,
  }

})