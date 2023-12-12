import { ActivityIndicator, Pressable, StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import Header from '../components/Header/Header'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import ProductDetail from '../components/ProductDetail/ProductDetail'


const ProductDetailScreen = ({ productId, returnHomeHandlerEvent }) => {
  const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)
  const { height, width } = useWindowDimensions()

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height])

  useEffect(() => {
    const productFinded = products_data.find(product => product.id === productId)
    setProductSelected(productFinded)
    setIsLoading(false)
  }, [productId])


  return (
    <>
      <Header title={'Product Detail'} returnHomeHandlerEvent={returnHomeHandlerEvent} />

      {isLoading ?
        <ActivityIndicator style={{ flex: 1, backgroundColor: colors.darkBlue }} animating={true} hidesWhenStopped={true} size='large' color={colors.paleGoldenRod} />
        :
        <ProductDetail productSelected={productSelected} isPortrait={isPortrait} />

      }
    </>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  productDetailScreen: {
    marginTop: 20,
    flex: 1,
    padding: 10,
  },
  productImagesPortrait: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 10,
  },
  productImagesLandscape: {
    width: '50%',
    height: '100%',
    borderRadius: 15,
    marginBottom: 10,
  },
  detailContainer: {
    padding: 10,
    justifyContent: 'space-around',
    textAlign: 'center',

  },
  productTitle: {
    color: colors.greyLabel,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productDescription: {
    color: colors.greyLabel,
    fontSize: 18,
    marginBottom: 20,
  },
  productPrice: {
    color: colors.paleGoldenRod,
    fontWeight: 'bold',
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: colors.paleGoldenRod,
    padding: 10,
    borderRadius: 20,
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.greyLabel2,
    textAlign: 'center'
  },
  buyButtonSpan: {
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkBlue,
  }

})


/* <View style={styles.productDetailScreen}>
          <Image source={{ uri: productSelected.images[0] }} resizeMode='cover' style={isPortrait ? styles.productImagesPortrait : styles.productImagesLandscape} />
          <View style={styles.detailContainer}>
            <Text style={styles.productTitle}>{productSelected.title}</Text>
            <Text style={styles.productDescription}>{productSelected.description}</Text>
            <Text style={styles.productPrice}>U$D {productSelected.price}</Text>
            <Pressable style={styles.buyButton} onPress={() => null}>
              <Text style={styles.buyButtonText}>Buy<Text style={styles.buyButtonSpan}>!</Text></Text>
            </Pressable>
          </View>
        </View> */