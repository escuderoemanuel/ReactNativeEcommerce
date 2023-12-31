import { TouchableOpacity, StyleSheet, Text, Image, View, useWindowDimensions } from 'react-native'
import { colors } from '../../global/colors'
import { useDispatch } from 'react-redux'
import { setProductIdSelected, setProductSelected } from '../../features/shopSlice'

const ProductItem = ({ product, navigation }) => {

  const dispatch = useDispatch()

  const { width } = useWindowDimensions()

  const handlerSetProductDispatch = () => {
    dispatch(setProductIdSelected(product.id));
    dispatch(setProductSelected(product.id));
    navigation.navigate('ProductDetails', product.id)
  }

  return (
    <View style={styles.containerProductGlobal}>
      <TouchableOpacity style={styles.containerProduct}
        onPress={() => { handlerSetProductDispatch() }
        } >
        <Image source={{ uri: product.thumbnail }} style={styles.productThumbnail} />
        <Text style={
          width < 400 ? styles.productTitle : styles.productTitleOther}>{product.title}</Text>
      </TouchableOpacity>
    </View >
  )
}

export default ProductItem

const styles = StyleSheet.create({
  containerProductGlobal: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  containerProduct: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.greyLabel,
    backgroundColor: colors.shadow,
    borderRadius: 15,
    overflow: 'hidden',
  },
  productTitle: {
    color: colors.greyLabel,
    fontSize: 18,
    textAlign: 'right',
    width: '70%',
    height: '100%',
    flexWrap: 'wrap',
    padding: 10,
  },
  productTitleOther: {
    color: colors.paleGoldenRod,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
    width: '70%',
    height: '100%',
    flexWrap: 'wrap',
    padding: 10,
  },
  productThumbnail: {
    width: '30%',
    height: '100%',
  }
})