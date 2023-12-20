import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import cart_data from '../data/cart_data.json'
import CartItem from '../components/CartItem/CartItem'
import { colors } from '../global/colors'

const CartScreen = () => {

  const renderCartItem = ({ item }) => (
    <CartItem item={item} />
  )


  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart_data}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: U$D </Text>
        <TouchableOpacity style={styles.confirmButton} onPress={null}>
          <Text style={styles.confirmText}>Confirm </Text>
        </TouchableOpacity>


      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: colors.greyLabel,
  }
})