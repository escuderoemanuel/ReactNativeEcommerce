import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../global/colors'


const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      <Text style={styles.textCard}>{children}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    margin: 5,
  },
  textCard: {
    fontSize: 18,
    fontFamily: 'Outfit-Regular',
    fontStyle: 'italic',
  }
}
)