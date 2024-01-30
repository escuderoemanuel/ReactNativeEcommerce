import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import user_data from '../data/user_data.json'
import { colors } from '../global/colors'
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import LocationSelector from '../components/LocationSelector/LocationSelector'
import { logout } from '../features/authSlice'
import { deleteSession } from '../database'


const ProfileScreen = ({ navigation }) => {
  const image = useSelector(state => state.authReducer.profilePicture)
  const location = useSelector(state => state.authReducer.location)
  const email = useSelector(state => state.authReducer.user)
  const localId = useSelector(state => state.authReducer.localId)

  // Logout
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    deleteSession(localId)
    console.log('Sesion Eliminada')
  }


  return (
    <BackgroundGradient>
      <ScrollView>
        <View style={styles.container}>

          {
            image ?
              <View style={styles.profilePictureContainer} >
                <Image
                  source={{ uri: image }}
                  style={styles.profilePicture}
                  resizeMode='contain'
                />
                <Pressable
                  onPress={() => navigation.navigate('Select Image')}
                  style={({ pressed }) => [{ backgroundColor: pressed ? colors.darkBlue : 'transparent' }, styles.pressed, styles.button]}
                >
                  <Text style={styles.btnChangePicture}>Change</Text>
                </Pressable>
              </View>
              :
              <View style={styles.profilePictureContainer} >
                <View
                  style={styles.profilePicture}
                >
                  <FontAwesome name="user-plus" style={styles.profileIcon}
                    resizeMode='contain' />
                </View>
                <Text style={styles.btnChangePicture}>Take a Picture</Text>
              </View>


          }

          <View style={styles.userDataContainer}>
            <Text style={styles.userTitle}>Name: {user_data.name}</Text>
            <Text style={styles.userData}>Rol: {user_data.role}</Text>
            <Text style={styles.userData}>Level: {user_data.level}</Text>
            <Text style={styles.userData}>Address: {user_data.address}</Text>
            <Text style={styles.userData}>City: {user_data.city}</Text>
          </View>
        </View>
        <View style={styles.addresPreviewContainer} >
          <Text style={styles.addressTitle}>
            Last Saved Location
          </Text>
          {
            location.address ?
              <Text style={styles.addressDescription}
              >
                {location.address}
              </Text>
              :
              <Text style={styles.addressDescription}
              >
                No Saved Location!
              </Text>
          }
        </View>

        <LocationSelector style={styles.locationSelectorComponent} />

      </ScrollView>
      {
        email &&
        <Pressable
          onPress={handleLogout}
          style={styles.logoutButton}
        >
          <Text style={styles.logoutText}>Logout!</Text>
        </Pressable>}
    </BackgroundGradient >
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    gap: 10,
  },
  profilePictureContainer: {
  },
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.textLight,
    marginBottom: 10,
  },
  btnChangePicture: {
    textAlign: 'center',
    backgroundColor: colors.greyLabel,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
  },
  userDataContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexShrink: 1,
  },
  userTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textLight,
  },
  userData: {
    fontWeight: 'normal',
    fontSize: 16,
    color: colors.textLight,
  },
  locationSelectorComponent: {
    width: '100%',
  },
  addresPreviewContainer: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.darkBlue,
  },
  addressTitle: {
    fontSize: 14,
    color: colors.textLight,
    fontWeight: 'bold',
  },
  addressDescription: {
    color: colors.textLight,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  logoutButton: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.redLabel,
    borderRadius: 10,
    marginVertical: 10,
  },
  logoutText: {
    color: colors.textLight,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    paddingVertical: 12,
  }
})