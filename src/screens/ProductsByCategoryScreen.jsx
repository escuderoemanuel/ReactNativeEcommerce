import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header/Header'


const ProductsByCategoryScreen = () => {
  return (
    <>
      <Header style='Products By Category ' />
      <View style={styles.productsByCategoryScreen}>
        <Text>Products By Category Screen</Text>
      </View>
    </>
  )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
  productsByCategoryScreen: {
  }

})