import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import MapPreview from '../MapPreview/MapPreview'
import { colors } from '../../global/colors'






const LocationSelector = () => {
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')



  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync()
      console.log(location)
      setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude })
    })()
  }, [])

  return (
    <View style={styles.containerLocationSelector}>
      <Text style={styles.textLocationSelector}>My current location:</Text>
      {
        location.latitude || location.longitude ?
          <>
            <Text
              style={styles.textLocationSelector}>
              Lat: {location.latitude}, Long: {location.longitude}
            </Text>
            <MapPreview location={location} />
          </>
          :
          <ActivityIndicator />
      }
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
  containerLocationSelector: {

    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  textLocationSelector: {
    color: colors.textLight,
    marginBottom: 10,
  }
})