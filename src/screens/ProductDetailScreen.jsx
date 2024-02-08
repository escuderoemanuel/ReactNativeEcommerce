import { ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import { useSelector } from 'react-redux'
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import Spinner from '../components/Spinner/Spinner'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cartSlice'

const ProductDetailScreen = ({ route }) => {

  const dispatch = useDispatch()

  const onAddToCart = () => {
    dispatch(addItem({ ...productSelected, quantity: 1 }))
  }

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
    <BackgroundGradient>

      <ScrollView style={style.containerProductDetail}>
        {isLoading ?
          <Spinner />
          :
          <ProductDetail productSelected={productSelected} isPortrait={isPortrait} onAddToCart={onAddToCart} />
        }
      </ScrollView>
    </BackgroundGradient>
  )
}

export default ProductDetailScreen

const style = StyleSheet.create({

})