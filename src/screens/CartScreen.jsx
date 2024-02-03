import cart from '../../assets/img/cart.png'
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Spinner from '../components/Spinner/Spinner'
import CartItem from '../components/CartItem/CartItem'

import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'


import { useDispatch } from 'react-redux'
import { removeItem, clearCart } from '../features/cartSlice'
import { setLocalOrder } from '../features/orderSlice';

const CartScreen = ({ navigation }) => {
  // Para obtener el localId de authSlice
  const localId = useSelector(state => state.authReducer.localId)

  const dispatch = useDispatch()
  const onRemoveItem = (id) => { dispatch(removeItem({ id })) }

  const cartItems = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)

  const [triggerPost, result] = usePostOrderMutation()



  const confirmCart = () => {
    const dateString = new Date(Date.now()).toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
    // Cambiar esto porque se puede repetir
    const orderId = Math.ceil(Math.random(1, 10) * 9000)

    const orderData = { total, cartItems, localId: localId, createdAt: dateString, orderId: orderId }

    triggerPost({ total, cartItems, localId: localId, createdAt: dateString, orderId: orderId })
      .then(() => {
        dispatch(setLocalOrder(orderData))
        navigation.navigate('OrderStack')
        dispatch(clearCart({}))
      })
  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onRemoveItem={onRemoveItem} />
  )

  return (
    <BackgroundGradient>
      <View style={styles.cartContainer}>
        {cartItems.length === 0 ? (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>There are no products in your cart!</Text>
            <Image source={cart} style={styles.cart} resizeMode='contain' />

          </View>
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
    </BackgroundGradient>

  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  emptyCart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    width: 250,
  },
  emptyCartText: {
    width: '50%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.textLight,
    marginVertical: 50,
  },
  cartConfirm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    width: '90%',
    textAlign: 'center',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    marginHorizontal: '5%',


  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textLight,
    backgroundColor: colors.darkBlue,

  },
  confirmButton: {
    backgroundColor: colors.darkBlue,
    padding: 12,
    borderRadius: 10,
  },
  confirmText: {
    fontSize: 18,
    color: colors.paleGoldenRod,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
})