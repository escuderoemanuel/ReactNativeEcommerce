import { StyleSheet, Text, View } from 'react-native'


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
    borderRadius: 8,
    margin: 5,
  }
}
)