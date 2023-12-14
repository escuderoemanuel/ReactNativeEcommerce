import { FlatList, StyleSheet, View, ScrollView } from 'react-native'
import Header from '../components/Header/Header'
import categoriesData from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem/CategoryItem'

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  return (
    <>
      {/* <Header title='CategoriesScreen' /> */}
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
    marginBottom: 80
  }
})