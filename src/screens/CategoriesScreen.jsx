import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native'
import CategoryItem from '../components/CategoryItem/CategoryItem'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/shopService'
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import Spinner from '../components/Spinner/Spinner'

const CategoriesScreen = ({ navigation }) => {

  //const categories = useSelector(state => state.shopReducer.categories)
  const { data, isLoading, error } = useGetCategoriesQuery()

  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  return (
    <BackgroundGradient>
      {isLoading ? <Spinner /> :
        <View>
          <FlatList
            data={data}
            renderItem={renderCategoryItem}
            keyExtractor={item => item}
          />
        </View>
      }
    </BackgroundGradient>
  )
}

export default CategoriesScreen
