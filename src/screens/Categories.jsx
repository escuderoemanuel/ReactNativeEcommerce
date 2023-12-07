import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header/Header'
import categoriesData from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem/CategoryItem'

const Categories = () => {

  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} />
  )

  return (
    <>
      <Header title='Categories' />
      <View style={styles.categories}>
        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={item => item}
        />
      </View>
    </>
  )
}

export default Categories

const styles = StyleSheet.create({
  categories: {
    
  }
})