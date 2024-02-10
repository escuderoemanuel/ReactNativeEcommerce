import { Image, StyleSheet, View, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import { colors } from '../../global/colors';
import { useSelector } from 'react-redux';

const width = Dimensions.get('window').width;

const Carousel = () => {
  const images = useSelector(state => state.shopReducer.productSelected.images)

  return (

    <Swiper style={styles.wrapper} showsButtons={true}>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>))
      }
    </Swiper>
  )
}

export default Carousel

const styles = StyleSheet.create({
  wrapper: {
    height: width,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.textLight,
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
    height: width,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  }
})