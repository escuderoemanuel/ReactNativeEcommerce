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
          <Ionicons name="arrow-back-circle-outline" size={30} color={colors.paleGoldenRod} />
        }
      </TouchableOpacity>

      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity onPress={navigation.popToTop} style={styles.headerIcon}>
        {
          navigation.canGoBack() &&
          <AntDesign name="home" size={24} color={colors.paleGoldenRod} />
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
    //paddingTop: Constants.statusBarHeight,
  },
  headerText: {
    fontFamily: 'Outfit-ExtraBold',
    fontSize: 24,
    color: colors.paleGoldenRod,
    justifyContent: 'center',
    textAlign: 'center',
  },
  headerIcon: {
    width: 26,
  }
})