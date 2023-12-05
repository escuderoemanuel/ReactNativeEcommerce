import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../global/colors'


const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      <Text>{children}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 15,
    marginVertical: 5,
    shadowColor: colors.shadow,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 5,
  }
}
)