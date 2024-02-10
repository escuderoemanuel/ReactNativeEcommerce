import { FlatList, View } from 'react-native'
import CategoryItem from '../components/CategoryItem/CategoryItem'
import { useGetCategoriesQuery, useGetProductsQuery } from '../services/shopService'
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import Spinner from '../components/Spinner/Spinner'
import { useDispatch } from 'react-redux'
import { setProducts } from '../features/shopSlice'
import { useEffect } from 'react'

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const { data, isLoading, error } = useGetCategoriesQuery()
  const { data: productsData, isLoading: isLoadingProducts, error: errorProducts } = useGetProductsQuery();

  const setLocalProducts = () => {
    if (productsData) {
      dispatch(setProducts(productsData))
    }
  }

  useEffect(() => {
    setLocalProducts()
  }, [data, productsData, dispatch])

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
