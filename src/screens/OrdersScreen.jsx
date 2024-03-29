import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import Spinner from '../components/Spinner/Spinner'
import { colors } from '../global/colors'
import { Text, View, Image, FlatList, StyleSheet, Modal, Pressable, ScrollView } from 'react-native'
import OrderItem from '../components/OrderItem/OrderItem'
import { useGetOrdersByUserQuery } from '../services/ordersService'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setLocalOrders } from '../features/orderSlice'

const OrdersScreen = () => {

  const [orders, setOrders] = useState([])
  const dispatch = useDispatch()
  const user = useSelector((state) => state.authReducer.user)
  const localOrders = useSelector((state) => state.orderReducer.orders)

  const localId = useSelector((state) => state.authReducer.localId);
  const { data, isLoading, error } = useGetOrdersByUserQuery(localId);

  const [orderData, setOrderData] = useState([]);
  const [orderIdSelected, setOrderIdSelected] = useState('');
  const [orderSelected, setOrderSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false);

  // Convierte el {{}} en [{}] para poder recorrerlos y mostrarlos en el flatlist
  useEffect(() => {
    if (data) {
      const orderData = Object.values(data)
      const localOrderData = orderData
        .filter(order => order.localId === localId)
        .map((order, index) => {
          return { ...order, orderId: orderData[index].orderId }
        })
      setOrderData(orderData)
      setOrders(localOrderData)
      dispatch(setLocalOrders(localOrderData))
    }
  }, [data, isLoading, user])

  useEffect(() => {
    if (orderData !== orders) {
      setOrders(orderData)
    }
  }, [localOrders, user])

  // Para mostrar el modal con la información de la orden seleccionada
  useEffect(() => {
    const orderSelected = localOrders.find((order) => order.orderId === orderIdSelected)
    setOrderSelected(orderSelected)
  }, [orderIdSelected, orderData])

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem
        order={item}
        setOrderId={setOrderIdSelected}
        setModalVisible={setModalVisible}
      />
    )
  }

  return (
    <BackgroundGradient>

      {
        isLoading ?
          <Spinner />
          : localOrders.length === 0 ?
            <View style={styles.emptyOrdersContainer}>
              <Text style={styles.emptyOrdersIcon}>⚠️</Text>
              <Text style={styles.emptyOrdersText}>There are no order in your order list!</Text>
            </View>
            : <FlatList
              data={localOrders}
              renderItem={renderOrderItem}
            />
      }

      {
        orderSelected &&
        <Modal visible={modalVisible} transparent={true}>
          <ScrollView>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalDataContainer}>

                  <View style={styles.modalDataHeader}>
                    <Text style={styles.modalTitle}>Order Id: {orderSelected.orderId}</Text>
                    <Text style={styles.modalTitle}>Total Price: U$D {orderSelected.total}</Text>
                    <Text style={styles.modalTitle}>Date: {orderSelected.createdAt}</Text>
                  </View>

                  {orderSelected.cartItems?.map((item, index) => (
                    <View key={index} style={styles.orderItem}>

                      <Image style={styles.orderItemImg} source={{ uri: item.thumbnail }}
                        resizeMode="contain"
                      />

                      <View>
                        <Text style={styles.modalText}>• Name: {item.title}</Text>
                        <Text style={styles.modalText}>• Quantity: {item.quantity}</Text>
                      </View>

                    </View>
                  ))}
                </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView >
        </Modal >
      }
    </BackgroundGradient >
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  modalView: {
    width: '95%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalDataHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: colors.lightBlue,
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 16,
  },
  emptyOrdersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyOrdersIcon: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  emptyOrdersText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.textLight,
  },
  orderItem: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    padding: 10,
  },
  orderItemImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  }
});