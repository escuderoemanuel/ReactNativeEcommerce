import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header/Header'

const ProductsByCategory = () => {
  return (
    <>
      <Header style='Products By Category ' />
      <View style={styles.productsByCategory}>
        <Text>Products By Category Screen</Text>
      </View>
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  productsByCategory: {}

})