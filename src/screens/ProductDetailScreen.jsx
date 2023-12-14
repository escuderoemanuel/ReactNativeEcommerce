import { ActivityIndicator, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import Header from '../components/Header/Header'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import ProductDetail from '../components/ProductDetail/ProductDetail'


const ProductDetailScreen = ({ route }) => {
  const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)
  const { height, width } = useWindowDimensions()

  const productId = route.params

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height])

  useEffect(() => {
    const productFound = products_data.find(product => product.id === productId)
    setProductSelected(productFound)
    setIsLoading(false)
  }, [productId])


  return (
    <>
      {/* <Header title={'Product Detail'} /> */}
      <ScrollView style={style.containerProductDetail}>
        {isLoading ?
          <ActivityIndicator style={{ flex: 1, backgroundColor: colors.darkBlue }} animating={true} hidesWhenStopped={true} size='large' color={colors.paleGoldenRod} />
          :
          <ProductDetail productSelected={productSelected} isPortrait={isPortrait} />

        }
      </ScrollView>
    </>
  )
}

export default ProductDetailScreen

const style = StyleSheet.create({
  containerProductDetail: {
    paddinBottom: 50
  }
})