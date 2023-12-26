import { ActivityIndicator, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import { useSelector } from 'react-redux'

const ProductDetailScreen = ({ route }) => {

  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)
  const { height, width } = useWindowDimensions()

  const productId = route.params

  const productSelected = useSelector(state => state.shopReducer.productSelected)

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height])

  useEffect(() => {
    setIsLoading(false)
  }, [productId])


  return (
    <>

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
    backgroundColor: colors.darkBlue,

  }
})