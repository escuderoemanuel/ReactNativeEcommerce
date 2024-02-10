import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native'
import { colors } from '../../global/colors'
import { useDispatch } from 'react-redux'
import { setProductIdSelected, setProductSelected } from '../../features/shopSlice'

const ProductItem = ({ product, navigation }) => {

  const dispatch = useDispatch()

  const handlerSetProductDispatch = () => {
    dispatch(setProductIdSelected(product.id));
    dispatch(setProductSelected());
    navigation.navigate('DETAIL', { product });
  }

  return (
    <View style={styles.containerProductGlobal}>
      <View style={styles.containerProduct}>
        <View style={styles.containerImg}>
          <TouchableOpacity style={styles.containerTouchable} onPress={handlerSetProductDispatch}>
            <Image source={{ uri: product.thumbnail }} style={styles.productThumbnail} />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          {product.price && <Text style={styles.productText}>U$D {product.price}</Text>}
          <Text style={styles.productText}>{product.title}</Text>
        </View>
      </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  containerProductGlobal: {
    flex: 1,
    width: '100%',
    paddingVertical: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerProduct: {
    width: 150,
    marginBottom: 10,
  },
  productThumbnail: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  textContainer: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  productText: {
    textAlign: 'center',
    color: colors.textLight,
    fontSize: 14,
    textTransform: 'uppercase',
  },
})
