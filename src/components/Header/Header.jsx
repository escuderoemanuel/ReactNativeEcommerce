import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../global/colors'
import { AntDesign } from '@expo/vector-icons';


const Header = ({ title, returnHomeHandlerEvent }) => {


  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Pressable onPress={returnHomeHandlerEvent}>
        <AntDesign name="home" size={24} color={colors.paleGoldenRod} />
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    padding: 10,
  },
  headerText: {
    fontFamily: 'Outfit-ExtraBold',
    fontSize: 36,
    color: colors.paleGoldenRod,
  }
})