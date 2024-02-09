import { ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import { useSelector, useDispatch } from 'react-redux'
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import Spinner from '../components/Spinner/Spinner'
import { addItem } from '../features/cartSlice'
import { setProductIdSelected } from '../features/shopSlice'

const ProductDetailScreen = ({ route }) => {
  const dispatch = useDispatch()
  const productId = useSelector(state => state.shopReducer.productIdSelected);
  const productSelected = useSelector(state => state.shopReducer.productSelected)

  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)
  const { height, width } = useWindowDimensions()

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height])

  useEffect(() => {
    setIsLoading(false)
  }, [productId])

  const onAddToCart = () => {
    dispatch(addItem({ ...productSelected, quantity: 1 }))
  }

  useEffect(() => {
    // Al montar el componente, actualiza el productIdSelected según el parámetro de la ruta
    const { productId } = route.params;
    dispatch(setProductIdSelected(productId));
  }, [dispatch, route.params]);

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
