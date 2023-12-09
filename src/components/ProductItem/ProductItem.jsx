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
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: colors.paleGoldenRod,
    borderWidth: 2,
    borderRadius: 15,
    overflow: 'hidden',
  },
  productTitle: {
    color: colors.greyLabel,
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