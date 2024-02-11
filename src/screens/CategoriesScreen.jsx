import { FlatList, View, StyleSheet } from 'react-native'
import CategoryItem from '../components/CategoryItem/CategoryItem'
import { useGetCategoriesQuery, useGetProductsQuery } from '../services/shopService'
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import Spinner from '../components/Spinner/Spinner'
import { useDispatch } from 'react-redux'
import { setProducts } from '../features/shopSlice'
import { useEffect } from 'react'
import { useGetCategoryThumbnailsQuery } from '../services/shopService'
import { setCategoryThumbnails } from '../features/shopSlice'

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useGetCategoriesQuery()
  const { data: productsData, isLoading: isLoadingProducts, error: errorProducts } = useGetProductsQuery()
  const { data: thumbnailsData, isLoading: isLoadingThumbnails, error: errorThumbnails } = useGetCategoryThumbnailsQuery()

  useEffect(() => {
    if (thumbnailsData) {
      dispatch(setCategoryThumbnails(thumbnailsData))
    }
  }, [thumbnailsData, dispatch])

  const renderCategoryItem = ({ item }) => (
    <CategoryItem style={styles.categoryItem} category={item} navigation={navigation} />
  )

  const setLocalProducts = () => {
    if (productsData) {
      dispatch(setProducts(productsData))
    }
  }

  useEffect(() => {
    setLocalProducts()
  }, [data, productsData, dispatch])

  const numColumns = 2;

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    return data;
  }

  return (
    <BackgroundGradient>
      {isLoading || isLoadingThumbnails ? <Spinner /> :
        <View>
          <FlatList
            data={formatData(data, numColumns)}
            renderItem={renderCategoryItem}
            keyExtractor={item => item}
            numColumns={numColumns}
          />
        </View>
      }
    </BackgroundGradient>
  )
}

export default CategoriesScreen
const styles = StyleSheet.create({
})