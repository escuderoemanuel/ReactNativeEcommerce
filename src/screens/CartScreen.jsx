import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import CartItem from '../components/CartItem/CartItem'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'

import { useDispatch } from 'react-redux'
import { removeItem } from '../features/cartSlice'

const CartScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const removeItem = (id) => {
    dispatch(removeItem({ ...productSelected }))
  }

  const cartItems = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)

  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = () => {
    triggerPost({ total, cartItems, user: 'LoggedUser' })
    // console.log(result)
    navigation.navigate
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} removeItem={removeItem} />
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: U$D {total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: colors.paleGoldenRod,
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