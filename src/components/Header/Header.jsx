import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../global/colors'


const Header = ({ title }) => {


  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: colors.darkBlue,
    marginTop: 10,
    marginLeft: 10
  },
  headerText: {
    fontFamily: 'Outfit-ExtraBold',
    fontSize: 40,
    color: colors.paleGoldenRod,
  }
})