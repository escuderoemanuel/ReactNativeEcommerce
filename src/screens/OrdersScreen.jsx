import { FlatList, StyleSheet } from 'react-native'
import OrderItem from '../components/OrderItem/OrderItem'
import orders_data from '../data/orders_data.json'

const OrdersScreen = () => {
  const renderOrderItem = ({ item }) => {
    const total = item.items.reduce((acc, curr) => (
      acc + curr.price * curr.quantity
    ), 0)
    return <OrderItem order={item} total={total} />
  }


  return (
    <FlatList
      data={orders_data}
      renderItem={renderOrderItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default OrdersScreen


const styles = StyleSheet.create({
  
})