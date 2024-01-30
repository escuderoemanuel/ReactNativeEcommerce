import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../global/colors'
import home from '../../../assets/img/home.png'
import back from '../../../assets/img/back.png'

const Header = ({ title, navigation }) => {

  return (
    <View style={styles.header}>
      {
        title !== 'Login' && title !== 'Signup' ?
          <>
            <TouchableOpacity onPress={navigation.goBack} style={styles.headerIcon}>
              {
                navigation.canGoBack() &&
                <Image source={back} style={styles.iconBack} />
              }
            </TouchableOpacity>

            <Text style={styles.headerText}>{title}</Text>


            <TouchableOpacity onPress={navigation.popToTop} style={styles.headerIcon}>
              {
                navigation.canGoBack() &&
                <Image source={home} style={styles.iconHome} onPress={() => navigation.navigate('CATEGORIES')} />
              }
            </TouchableOpacity>
          </>
          :
          <Text style={styles.headerTextCenter}>{title}</Text>

      }
    </View >
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.darkBlue,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    color: colors.textLight,
    justifyContent: 'center',
    textAlign: 'center',
  },
  iconHome: {
    width: 30,
    height: 30,
  },
  iconBack: {
    width: 40,
    height: 26,

  },
  headerTextCenter: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    color: colors.textLight,
    width: '100%',
    textAlign: 'center',
  }
})