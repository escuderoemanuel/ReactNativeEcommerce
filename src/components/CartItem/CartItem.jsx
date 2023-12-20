import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native'
import Card from '../Card/Card'
import { colors } from '../../global/colors'

const CartItem = ({ item }) => {


  return (
    <Card style={styles.cartItemContainer}>

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

      <TouchableOpacity style={styles.trashCash} onPress={null}>
        <Ionicons name='trash-outline' size={24} color={colors.paleGoldenRod} />
      </TouchableOpacity>

    </Card>
  )
}

export default CartItem

const styles = StyleSheet.create({
  cartItemContainer: {
    backgroundColor: colors.darkBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  cartContenContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  imageCartItem: {
    height: 100,
    width: 100,
  },
  trashCart: {
    marginLeft: 'auto',
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