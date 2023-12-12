import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../global/colors'
import { AntDesign } from '@expo/vector-icons';


const Header = ({ title, returnHomeHandlerEvent }) => {

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.headerIcons}>
        <Pressable
          onPress={returnHomeHandlerEvent}>
          <AntDesign name="home" size={24} color={colors.paleGoldenRod} />
        </Pressable>
      </View>
    </View >
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
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  headerText: {
    fontFamily: 'Outfit-ExtraBold',
    fontSize: 24,
    color: colors.paleGoldenRod,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  }
})