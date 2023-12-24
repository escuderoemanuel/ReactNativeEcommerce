import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Card from '../Card/Card'
import { colors } from '../../global/colors'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../features/shopSlice'

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch()

  return (

    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductsByCategory', { category })
        dispatch(setCategorySelected(category))
      }}
      accessibilityRole="button"
      accessibilityLabel={`Ver productos de la categoría ${category}`}
    >
      < Card style={styles.categoryItem} >
        <Text style={styles.categoryItemText}>{category}</Text>
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
  },
  categoryItemText: {
    textTransform: 'capitalize',
  }
})