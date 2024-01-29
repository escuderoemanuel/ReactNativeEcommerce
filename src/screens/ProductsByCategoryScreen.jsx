import { ActivityIndicator } from 'react-native'
import { FlatList, View, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem/ProductItem'
import Search from '../components/Search/Search'
import NoSearchResult from '../components/NoSearchResult/NoSearchResult'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/shopService'
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import Spinner from '../components/Spinner/Spinner'

const ProductsByCategoryScreen = ({ navigation }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  const category = useSelector(state => state.shopReducer.categorySelected)

  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category)

  //const productsFilteredByCategory = useSelector(state => state.shopReducer.productsFilteredByCategory)


  useEffect(() => {

    if (!isLoading) {
      // Para quedarme solamente con los valores de Firebase y no con los índices
      const productsValues = Object.values(productsFilteredByCategory)
      const productsFilteredByName = productsValues.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
      setProductsByCategory(productsFilteredByName)
    }

  }, [isLoading, category, search])


  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  )

  const onSearch = (search) => {
    setSearch(search);
  };

  return (
    <BackgroundGradient>
      <View style={styles.container}>

        {
          isLoading ?
            <Spinner />
            :
            <>
              <Search onSearchHandlerEvent={onSearch} />
              <>
                {productsByCategory.length === 0 && (
                  <NoSearchResult />
                )}

                <FlatList
                  style={styles.containerProductsByCategory}
                  data={productsByCategory}
                  renderItem={renderProductItem}
                  keyExtractor={item => item.id}
                  numColumns={2}
                />
              </>
            </>
        }


      </View >
    </BackgroundGradient>
  )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

})