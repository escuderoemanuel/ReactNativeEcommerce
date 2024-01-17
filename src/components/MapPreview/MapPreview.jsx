import { Image, StyleSheet, Text, View } from 'react-native'

const MAPS_API_KEY = `AIzaSyAZFi9hCgWOcTj3Mbs7Aio32W76LjOAuIo`;
//const MAPS_API_KEY = process.env.EXPO_MAPS_API_KEY;



const MapPreview = ({ location }) => {
  console.log(location)

  const icon = `https://i.postimg.cc/5NgNBbFD/shop.png`
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=300x300&maptype=roadmap&markers=color:red%7Clabel:I%7C${location.latitude},${location.longitude}&key=${MAPS_API_KEY}`

  return (
    <View style={styles.mapPreview}>

      <Image
        style={styles.mapImage}
        source={{ uri: mapPreviewUrl }}
      />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  mapImage: {

    width: 320,
    height: 250,
  }
})