import { colors } from '../../global/colors'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function ProductDetail({ productSelected, isPortrait }) {


  return (
    <View style={isPortrait ? styles.productDetailScreenPortrait : styles.productDetailScreenLandscape}>
      <Image source={{ uri: productSelected.images[0] }} resizeMode='cover' style={isPortrait ? styles.productImagesPortrait : styles.productImagesLandscape} />
      <View style={styles.detailContainer}>
        <Text style={styles.productTitle}>{productSelected.title}</Text>
        <Text style={styles.productDescription}>{productSelected.description}</Text>
        <Text style={styles.productPrice}>U$D {productSelected.price}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={() => null} >
          <Text style={styles.buyButtonText}>Buy
            <Text style={styles.buyButtonSpan}>!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  productDetailScreenPortrait: {
    marginTop: 20,
    flex: 1,
    padding: 10,
  },
  productDetailScreenLandscape: {
    flexDirection: 'row',
    width: '50%',
    marginTop: 20,
    flex: 1,
    padding: 20,
  },
  productImagesPortrait: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 10,
  },
  productImagesLandscape: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    marginRight: 20,
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