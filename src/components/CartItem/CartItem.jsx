import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native'
import Card from '../Card/Card'
import { colors } from '../../global/colors'
import trash from '../../../assets/img/trash.png'

const CartItem = ({ item, onRemoveItem }) => {

  const handleRemoveItem = () => {
    onRemoveItem(item.id)
  }

  return (
    <Card style={styles.cartItemContainer}>
      <View style={styles.itemContainer}>

        <Image
          style={styles.imageCartItem}
          resizeMode='contain'
          source={{ uri: item.thumbnail }}
        />
        <View style={styles.cartContenContainer} >
          <Text style={styles.cartTitle}>{item.title}</Text>
          <Text style={styles.cartText}>{item.brand}</Text>
          <Text style={styles.cartText}>${item.price}</Text>

          <Text style={styles.cartQuantity}>
            Cantidad: {item.quantity}
          </Text>

          <Text style={styles.cartTotalPrice}>
            Total: ${item.quantity * item.price}
          </Text>

        </View>

        <TouchableOpacity style={styles.trashCash}
          onPress={handleRemoveItem}>
          <Image style={styles.trashCart} source={trash} />

        </TouchableOpacity>
      </View>
    </Card>
  )
}

export default CartItem

const styles = StyleSheet.create({
  cartItemContainer: {
    backgroundColor: colors.shadow,
    borderRadius: 12,

  },
  itemContainer: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartContenContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    width: '50%',
  },
  imageCartItem: {
    height: 100,
    width: '30%',
  },
  trashCart: {
    width: 25,
    height: 35,
  },
  cartTitle: {
    textTransform: 'capitalize',
    fontSize: 20,
    color: colors.greyLabel,
    fontWeight: 'bold',
  },
  cartText: {
    textTransform: 'capitalize',
    fontSize: 14,
    color: colors.greyLabel,
  },
  cartQuantity: {
    textTransform: 'capitalize',
    fontSize: 14,
    color: colors.greyLabel,
  },
  cartTotalPrice: {
    textTransform: 'capitalize',
    fontSize: 18,
    color: colors.greyLabel,
    fontWeight: 'bold',

  }
})