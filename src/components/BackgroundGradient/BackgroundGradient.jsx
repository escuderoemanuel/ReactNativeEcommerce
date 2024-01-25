import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../global/colors';

const BackgroundGradient = ({ children }) => {
  return (
    <LinearGradient
      colors={[colors.darkBlue, colors.lightBlue,]}
      style={styles.background}
    >{children}
    </LinearGradient >
  )
}

export default BackgroundGradient

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})