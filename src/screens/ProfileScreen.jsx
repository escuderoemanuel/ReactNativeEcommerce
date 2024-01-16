import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import user_data from '../data/user_data.json'
import { colors } from '../global/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux'


const ProfileScreen = ({ navigation }) => {
  const image = useSelector(state => state.authReducer.profilePicture)

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[colors.darkBlue, colors.lightBlue,]}
      style={styles.background}
      end={{ x: 0.5, y: 0.5 }}

    >
      <View style={styles.container}>

        <Pressable
          onPress={() => navigation.navigate('Select Image')}
          style={({ pressed }) => [{ backgroundColor: pressed ? colors.darkBlue : 'transparent' }, styles.pressed, styles.button]}
        >
          {
            image ?
              <View style={styles.profilePictureContainer} >
                <Image
                  source={{ uri: image }}
                  style={styles.profilePicture}
                  resizeMode='contain'
                />
                <Text style={styles.editProfilePicture}>Change</Text>
              </View>
              :
              <View style={styles.profilePictureContainer} >
                <View
                  style={styles.profilePicture}
                >
                  <FontAwesome name="user-plus" style={styles.profileIcon}
                    resizeMode='contain' />
                </View>
                <Text style={styles.editProfilePicture}>Take a Picture</Text>
              </View>

          }
        </Pressable>

        <View style={styles.userDataContainer}>
          <Text style={styles.userTitle}>Name: {user_data.name}</Text>
          <Text style={styles.userData}>Rol: {user_data.role}</Text>
          <Text style={styles.userData}>Level: {user_data.level}</Text>
          <Text style={styles.userData}>Address: {user_data.address}</Text>
          <Text style={styles.userData}>City: {user_data.city}</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    gap: 50,
    alignItems: 'center',
    flex: 1,
  },
  button: {
    padding: 5,
    borderRadius: 20,
  },
  profilePictureContainer: {
    padding: 5,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.textLight,
    marginBottom: 20,
  },
  editProfilePicture: {
    width: 200,
    textAlign: 'center',
    backgroundColor: colors.greyLabel,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',

  },
  profileIcon: {
    fontSize: 150,
    textAlign: 'center',
    paddingVertical: 20,
    color: colors.greyLabel1,
  },
  userDataContainer: {
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
  },
  userTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textLight,
  },
  userData: {
    fontWeight: 'normal',
    fontSize: 18,
    color: colors.textLight,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})