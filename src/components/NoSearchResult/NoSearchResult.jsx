import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../global/colors'

export default function NoSearchResult() {
  return (
    <View style={styles.container}>
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
    color: colors.paleGoldenRod
  }
})