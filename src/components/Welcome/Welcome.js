import { Image, StyleSheet, Text, View } from 'react-native'
import BackgroundGradient from '../BackgroundGradient/BackgroundGradient'
import welcome from '../../../assets/img/logo.png'
import { colors } from '../../global/colors'

const Welcome = () => {
  return (
    <BackgroundGradient>
      <View style={styles.containerWelcome}>
        <Image source={welcome} style={styles.welcomeImg} resizeMode='contain' />
        <Text style={styles.textWelcome}>
          Welcome
        </Text>
      </View>
    </BackgroundGradient>
  )
}

export default Welcome

const styles = StyleSheet.create({
  containerWelcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWelcome: {
    fontSize: 50,
    fontFamily: 'Outfit-Bold',
    color: colors.textLight
  }
})