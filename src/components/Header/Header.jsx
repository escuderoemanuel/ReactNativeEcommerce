import { StyleSheet, Text, View } from 'react-native'

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4aa',
    top: 0,
  }
})