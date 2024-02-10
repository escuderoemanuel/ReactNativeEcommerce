import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Card from '../Card/Card'
import { colors } from '../../global/colors'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../features/shopSlice'

//import { setProducts } from '../../features/shopSlice'

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch()


  return (

    <TouchableOpacity
      onPress={() => {
        dispatch(setCategorySelected(category))
        navigation.navigate('PRODUCTS', { category })

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
    backgroundColor: colors.pink,
    padding: 20,
    margin: 10,
    height: 80,
    borderRadius: 60,
    borderColor: colors.textLight,
    borderWidth: 2,
    justifyContent: 'center',
  },
  categoryItemText: {
    color: colors.textLight,
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'right',
    marginRight: 20,
  }
})