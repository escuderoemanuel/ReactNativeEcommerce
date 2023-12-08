import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header/Header'
import categoriesData from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem/CategoryItem'

const CategoriesScreen = ({ onSelectCategoryEvent }) => {
  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} onSelectCategoryEvent={onSelectCategoryEvent} />
  )

  return (
    <>
      <Header title='Categories' />
      <View style={styles.categoriesScreen}>
        <FlatList
          data={categoriesData}
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

  }
})