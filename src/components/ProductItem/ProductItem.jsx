import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native'
import { colors } from '../../global/colors'

const ProductItem = ({ product }) => {
  return (
    <TouchableOpacity style={styles.containerProduct}>
      <Image source={{ uri: product.thumbnail }} style={styles.productThumbnail} />
      <Text style={styles.productTitle}>{product.title}</Text>
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  containerProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderColor: colors.paleGoldenRod,
    borderWidth: 2,
    borderRadius: 15,
    overflow: 'hidden',
  },
  productTitle: {
    color: colors.greyLabel,
    marginTop: 10,
    marginRight: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  productThumbnail: {
    width: 100,
    height: 100,
  }
})