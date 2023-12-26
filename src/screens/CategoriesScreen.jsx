import { FlatList, StyleSheet, View } from 'react-native'
import CategoryItem from '../components/CategoryItem/CategoryItem'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'

const CategoriesScreen = ({ navigation }) => {

  const categories = useSelector(state => state.shopReducer.categories)

  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  return (
    <>
      <View style={styles.categoriesScreen}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item}
        />
      </View>
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  categoriesScreen: {
    backgroundColor: colors.darkBlue
  }
})