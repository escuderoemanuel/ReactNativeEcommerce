import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../global/colors'

export default function NoSearchResult() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerIcon}>⚠️</Text>
      <Text style={styles.containerText}>No products found!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textLight
  },
  containerIcon: {
    fontSize: 50,
  }
})