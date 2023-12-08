import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header/Header'


const ProductDetailScreen = () => {
  return (
    <>
      <Header title='Product Detail' />
      <View style={styles.productDetailScreen}>

        <Text>Product Detail Screen</Text>
      </View>
    </>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  productDetailScreen: {

  }
})