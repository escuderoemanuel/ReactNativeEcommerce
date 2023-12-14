import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../../global/colors'
import { Ionicons, AntDesign } from '@expo/vector-icons';


const Header = ({ title, navigation }) => {

  return (
    <View style={styles.header}>
      <Pressable onPress={navigation.goBack} style={styles.headerIcon}>
        <Ionicons name="arrow-back-circle-outline" size={30} color={colors.paleGoldenRod} />
      </Pressable>
      <Text style={styles.headerText}>{title}</Text>
      <Pressable onPress={navigation.popToTop} style={styles.headerIcon}>
        <AntDesign name="home" size={24} color={colors.paleGoldenRod} />
      </Pressable>
    </View >
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  headerText: {
    fontFamily: 'Outfit-ExtraBold',
    fontSize: 24,
    color: colors.paleGoldenRod,
    justifyContent: 'center',
    textAlign: 'center',
  },
  headerIcon: {
    justifyContent: 'flex-start',
  }
})