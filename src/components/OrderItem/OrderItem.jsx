import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Card from '../Card/Card'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../global/colors';


const OrderItem = ({ order, total }) => {
  return (
    <Card style={styles.cartItemContainer}>
      <View>
        <Text style={styles.createdAt}>
          Creada el {new Date(order.createdAt).toLocaleDateString()}
        </Text>
        <Text style={styles.total}>
          Total: ${total}
        </Text>
      </View>
      <TouchableOpacity style={styles.searchIcon} onPress={null}>
        <Feather name='search' size={24} color={colors.paleGoldenRod} />
      </TouchableOpacity>
    </Card>

  )
}

export default OrderItem

const styles = StyleSheet.create({})