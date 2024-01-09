import CartItem from '../components/CartItem/CartItem'

import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'
import OrdersScreen from './OrdersScreen'

import { useDispatch } from 'react-redux'
import { removeItem } from '../features/cartSlice'

const CartScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const onRemoveItem = (id) => { dispatch(removeItem({ id })) }

  const cartItems = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)

  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = () => {
    triggerPost({ total, cartItems, user: 'LoggedUser' })

    navigation.navigate('OrderStack')
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onRemoveItem={onRemoveItem} />
  )

  return (
    <View style={styles.cartContainer}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Empty Cart!</Text>
      ) : (
        <>
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


          </View></>
      )}

    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: colors.greyLabel,
  },
  emptyCartText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkBlue,
    marginVertical: 50,
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