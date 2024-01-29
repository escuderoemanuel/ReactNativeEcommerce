import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Card from '../Card/Card'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../global/colors';


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
          <Feather name='search' size={24} color={colors.textLight} />
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
  }


})