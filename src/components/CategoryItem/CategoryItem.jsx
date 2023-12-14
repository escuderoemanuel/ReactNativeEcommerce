import { StyleSheet, Text, Pressable } from 'react-native'
import Card from '../Card/Card'
import { colors } from '../../global/colors'

const CategoryItem = ({ category, navigation }) => {

  return (

    <Pressable
      onPress={() => navigation.navigate('ProductsByCategory', { category })}
      accessibilityRole="button"
      accessibilityLabel={`Ver productos de la categoría ${category}`}
    >
      < Card style={styles.categoryItem} >
        <Text>{category}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  categoryItem: {
    fontSize: 18,
    backgroundColor: colors.paleGoldenRod,
    padding: 20,
    margin: 10,
  }
})