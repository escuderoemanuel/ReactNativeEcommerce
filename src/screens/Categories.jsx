import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header/Header'

const Categories = () => {
  return (
    <>
      <Header title='Categories' />
      <View style={styles.categories}>
        <Text>Categories Screen</Text>
      </View>
    </>
  )
}

export default Categories

const styles = StyleSheet.create({
  categories: {
  }
})