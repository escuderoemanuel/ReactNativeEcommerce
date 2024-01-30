import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Card from '../Card/Card'
import { colors } from '../../global/colors';
import search from '../../../assets/img/search.png'



const OrderItem = ({ order, setOrderId, setModalVisible }) => {

  return (
    <Card style={styles.cartItemContainer}>
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>
            Creada el {order.createdAt}
          </Text>
          <Text style={styles.totalText}>
            Total: ${order.total}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => {
            setOrderId(order.orderId)
            setModalVisible(true)
          }}
        >
          <Image style={styles.search} source={search} />

        </TouchableOpacity>
      </View>
    </Card>

  )
}

export default OrderItem

const styles = StyleSheet.create({
  cartItemContainer: {
    borderRadius: 12,
    borderColor: colors.textLight,
    borderWidth: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  }
  ,
  textContainer: {
    flexDirection: 'column',
  },
  itemText: {
    color: colors.greyLabel,
    fontSize: 16,
    fontStyle: 'italic',
  },
  totalText: {
    color: colors.greyLabel,
    fontSize: 18,
    fontWeight: 'bold',
  },
  search: {
    width: 25,
    height: 35,
  }


})