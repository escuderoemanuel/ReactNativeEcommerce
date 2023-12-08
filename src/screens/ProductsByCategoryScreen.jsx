import { Text, StyleSheet, View, FlatList } from 'react-native'
import Header from '../components/Header/Header'
import products_data from '../data/products_data'
import { colors } from '../global/colors'
import ProductItem from '../components/ProductItem/ProductItem'


const ProductsByCategoryScreen = () => {
  const renderProductItem = ({ item }) => (
    <ProductItem product={item}></ProductItem>
  )


  return (
    <>
      <Header title='Products' />
      <FlatList
        data={products_data}
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