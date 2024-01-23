import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import MapPreview from '../MapPreview/MapPreview'
import { colors } from '../../global/colors'
import { setUserLocation } from '../../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { usePutUserLocationMutation } from '../../services/shopService'
import { getDistance } from 'geolib'

const MAPS_API_KEY = process.env.EXPO_PUBLIC_MAPS_API_KEY;

const LocationSelector = () => {
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')
  const [address, setAddress] = useState('')
  const localId = useSelector(state => state.authReducer.localId)
  const [triggerPutUserLocation, result] = usePutUserLocationMutation()

  const [distance, setDistance] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      //console.log(location)
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

  useEffect(() => {
    (
      async () => {
        try {
          if (location.latitude) {
            const urlReverseGeocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${MAPS_API_KEY}`
            const response = await fetch(urlReverseGeocode)
            const data = await response.json()
            const formattedAddress = data.results[0].formatted_address
            const distance = getDistance(
              { latitude: location.latitude, longitude: location.longitude },
              { latitude: location.latitude, longitude: location.longitude + 0.001 }
            )
            setDistance(distance)
            setAddress(formattedAddress)
          }
        } catch (error) {
          setError(error.message)
        }
      })()
  }, [location])

  const onConfirmAddress = () => {
    const locationFormatted = {
      latitude: location.latitude,
      longitude: location.longitude,
      address: address,
    }
    dispatch(setUserLocation(locationFormatted))

    triggerPutUserLocation({
      location: locationFormatted, localId
    })
  }

  return (
    <View style={styles.containerLocationSelector}>
      <Text style={styles.locationTitle}>My current location:</Text>
      {
        location.latitude || location.longitude ?
          <>
            <Text style={styles.addressText}>{address}</Text>
            <Text style={styles.addressText}>Nearest Store: {distance} Km</Text>
            <Text
              style={styles.locationText}>
              Lat: {location.latitude} Long: {location.longitude}
            </Text>
            <TouchableOpacity onPress={onConfirmAddress}>
              <Text style={styles.btnUpdatelocation} >Update Location</Text>
            </TouchableOpacity>
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
  locationTitle: {
    color: colors.textLight,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  locationText: {
    color: colors.textLight,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  addressText: {
    color: colors.textLight,
    fontStyle: 'italic',

  },
  btnUpdatelocation: {
    textAlign: 'center',
    backgroundColor: colors.greyLabel,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  }
})