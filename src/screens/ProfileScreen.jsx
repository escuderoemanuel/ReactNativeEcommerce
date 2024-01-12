import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import user_data from '../data/user_data.json'
import { colors } from '../global/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux'


const ProfileScreen = ({ navigation }) => {
  //const [image, setImage] = useState('')
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
          style={({ pressed }) => [{ backgroundColor: pressed ? colors.greyLabel : colors.textLight }, styles.button, styles.pressed]}
        >
          {
            image ?
              <View>
                <Image
                  source={{ uri: image }}
                  style={styles.pictureProfile}
                  resizeMode='contain'
                />
                <Text style={styles.editPictureProfile}>Change</Text>
              </View>
              :
              <FontAwesome name="user-plus" style={styles.iconProfile}
                resizeMode='contain' />

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
    flexDirection: 'row',
    paddingVertical: 30,
    gap: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  pictureProfile: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.textLight,
  },
  editPictureProfile: {
    color: colors.greyLabel2,
    textAlign: 'center',
    backgroundColor: colors.greyLabel,
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 10,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',

  },
  iconProfile: {
    fontSize: 60,
    textAlign: 'center',
    paddingVertical: 20,
    color: colors.greyLabel1,
  },
  userDataContainer: {
    //marginTop: 10,
  },
  userTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textLight,
  },
  button: {
    borderRadius: 20,
    width: 100,
    height: 100,
  },
  userData: {
    fontWeight: 'normal',
    fontSize: 14,
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