import { Image, StyleSheet, View, Text } from 'react-native'

const MAPS_API_KEY = process.env.EXPO_PUBLIC_MAPS_API_KEY;

const MapPreview = ({ location }) => {
  console.log(location)

  const icon = `https://i.postimg.cc/5NgNBbFD/shop.png`
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=300x300&maptype=roadmap&markers=color:red%7Clabel:I%7C${location.latitude},${location.longitude}&markers=icon:${icon}%7C${location.latitude + 0.01},${location.longitude}&path=color:0x0000ff%7C${location.latitude},${location.longitude}%7C${location.latitude + 0.01},${location.longitude}&key=${MAPS_API_KEY}`

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
    borderRadius: 10,
    width: 340,
    height: 300,
  }
})