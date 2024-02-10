import { StyleSheet, View } from 'react-native'


const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      <View style={styles.textCard}>{children}</View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 5,
  }
}
)