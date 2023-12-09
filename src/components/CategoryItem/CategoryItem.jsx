import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Card from '../Card/Card'
import { colors } from '../../global/colors'

const CategoryItem = ({ category, onSelectCategoryEvent }) => {
  return (

    <TouchableOpacity onPress={() => onSelectCategoryEvent(category)}>
      < Card style={styles.categoryItem} >
        <Text>{category}</Text>
      </Card>
    </TouchableOpacity>
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