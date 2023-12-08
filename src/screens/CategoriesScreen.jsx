import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header/Header'
import categoriesData from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem/CategoryItem'

const CategoriesScreen = () => {

  return (
    <>
      <Header title='Categories' />
      <View style={styles.categoriesScreen}>
        <FlatList
          data={categoriesData}
          // Toma cada item y lo renderiza dentro de un componente CategoryItem
          renderItem={({ item }) => (
            <CategoryItem category={item} />
          )}
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