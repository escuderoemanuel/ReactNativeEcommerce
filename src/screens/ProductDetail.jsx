import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header/Header'

const ProductDetail = () => {
  return (
    <>
      <Header title='Product Detail' />
      <View style={styles.productDetail}>

        <Text>Product Detail</Text>
      </View>
    </>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  productDetail: {
  }
})