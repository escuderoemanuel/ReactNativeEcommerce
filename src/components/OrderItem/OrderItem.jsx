import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Card from '../Card/Card'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../global/colors';


const OrderItem = ({ order, total }) => {
  return (
    <Card style={styles.cartItemContainer}>
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>
            Creada el {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Text style={styles.totalText}>
            Total: ${total}
          </Text>
        </View>
        <TouchableOpacity style={styles.searchIcon} onPress={null}>
          <Feather name='search' size={24} color={colors.paleGoldenRod} />
        </TouchableOpacity>
      </View>
    </Card>

  )
}

export default OrderItem

const styles = StyleSheet.create({
  cartItemContainer: {
    backgroundColor: colors.darkBlue,
  },
  itemContainer: {
    backgroundColor: colors.redLabel,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    borderRadius: 10,
  }
  ,
  textContainer: {
    flexDirection: 'column',
  },
  itemText: {
    color: colors.greyLabel,
    fontSize: 18,
    fontStyle: 'italic',
  },
  totalText: {
    color: colors.greyLabel,
    fontSize: 18,
    fontWeight: 'bold',
  }


})