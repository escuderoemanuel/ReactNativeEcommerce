import { FlatList, StyleSheet, View } from 'react-native'
import categoriesData from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem/CategoryItem'
import { colors } from '../global/colors'

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  return (
    <>
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
    backgroundColor: colors.darkBlue
  }
})