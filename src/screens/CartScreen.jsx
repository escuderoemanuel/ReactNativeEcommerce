import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import cart_data from '../data/cart_data.json'
import CartItem from '../components/CartItem/CartItem'
import { colors } from '../global/colors'
import { useState, useEffect } from 'react'

const CartScreen = () => {
  const [total, setTotal] = useState()

  useEffect(() => {
    const totalCart = cart_data.reduce
      ((accumulator, currentItem) => (
        accumulator += currentItem.price * currentItem.quantity), 0)
    setTotal(totalCart)
  }, [])


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
        <Text style={styles.totalPrice}>Total: U$D {total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={null}>
          <Text style={styles.confirmText}>Confirm! </Text>
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
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  confirmButton: {
    backgroundColor: colors.redLabel,
    padding: 10,
    borderRadius: 10,
  },
  confirmText: {
    fontSize: 18,
    color: colors.greyLabel,
    fontWeight: 'bold',

  }
})