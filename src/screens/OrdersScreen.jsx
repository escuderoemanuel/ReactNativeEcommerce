import { FlatList, StyleSheet } from 'react-native'
import OrderItem from '../components/OrderItem/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


const OrdersScreen = () => {
  const localId = useSelector((state) => state.authReducer.localId);
  // console.log('LocalId OrdersScreen', localId)
  const { data, isLoading, error } = useGetOrdersQuery(localId);
  const [orderData, setOrderData] = useState([]);
  const [orderIdSelected, setOrderIdSelected] = useState('');
  const [orderSelected, setOrderSelected] = useState('')
  const [modalVisible, setModalVisible] = useState(false);


  // Convierte el {{}} en [{}] para poder recorrerlos y mostrarlos en el flatlist
  useEffect(() => {
    if (data) {
      const orderData = Object.values(data)
      setOrderData(orderData)
    }

  }, [data, isLoading])

  useEffect(() => {
    console.log(orderIdSelected)
    const orderSelected = orderData.find((order) => order.orderId === orderIdSelected)
    setOrderSelected(orderSelected)
  }, [orderIdSelected])



  const renderOrderItem = ({ item }) => {
    return <OrderItem order={item} total='{total}' setOrderId={setOrderIdSelected} />
  }


  return (
    //! Aquí poner un ActivityIndicator!
    <FlatList
      data={orderData}
      renderItem={renderOrderItem}
    />
  )
}

export default OrdersScreen

