import { MaterialCommunityIcons } from '@expo/vector-icons';
import Spinner from '../components/Spinner/Spinner'
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import { colors } from '../global/colors'

import { TouchableOpacity, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import CartItem from '../components/CartItem/CartItem'
import cart from '../../assets/img/cart.png'
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrdersMutation } from '../services/ordersService'
import { setLocalOrders } from '../features/orderSlice';

import { removeItem, clearCart } from '../features/cartSlice'

const CartScreen = ({ navigation }) => {
  // Para obtener el localId de authSlice
  const localId = useSelector(state => state.authReducer.localId)
  const cartItems = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)
  const localOrders = useSelector(state => state.orderReducer.orders)

  const dispatch = useDispatch()
  const [triggerPostOrder, result] = usePostOrdersMutation()

  const onRemoveItem = (id) => { dispatch(removeItem({ id })) }


  const confirmCart = async () => {
    const dateString = new Date(Date.now()).toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
    // Cambiar esto porque se puede repetir

    const { data: newOrderData } = await triggerPostOrder({ total, cartItems, localId: localId, createdAt: dateString, orderId: orderId })
    const orderId = Math.ceil(Math.random(1, 10) * 9000)
    const updatedOrders = [...localOrders, { cartItems, total, createdAt: dateString, localId, orderId }];
    //const orderData = { total, cartItems, localId: localId, createdAt: dateString, orderId: orderId }
    dispatch(setLocalOrders(updatedOrders));
    dispatch(clearCart({}));
    navigation.navigate('OrderStack')

    /*     triggerPost({ total, cartItems, localId: localId, createdAt: dateString, orderId: orderId })
          .then(() => {
            dispatch(setLocalOrder(orderData))
            navigation.navigate('OrderStack')
            dispatch(clearCart({}))
          }) */
  }

  /* const clearCart = () => {
    dispatch(clearCart({}))
  } */

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
              {/*   <TouchableOpacity style={styles.confirmButton} onPress={clearCart}>
                <Text style={styles.confirmText}>Clear! </Text>
              </TouchableOpacity> */}


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