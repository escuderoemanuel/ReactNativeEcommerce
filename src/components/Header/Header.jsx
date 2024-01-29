import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../global/colors'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';

const Header = ({ title, navigation }) => {

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.headerIcon}>
        {
          navigation.canGoBack() &&
          <Ionicons name="arrow-back-circle-outline" style={styles.icon} />
        }
      </TouchableOpacity>

      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity onPress={navigation.popToTop} style={styles.headerIcon}>
        {
          navigation.canGoBack() &&
          <AntDesign name="home" style={styles.icon} />
        }
      </TouchableOpacity>
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
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    color: colors.textLight,
    justifyContent: 'center',
    textAlign: 'center',
  },
  headerIcon: {
    /*  width: 26,
     color: colors.textLight, */
  },
  icon: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.textLight,
  }
})