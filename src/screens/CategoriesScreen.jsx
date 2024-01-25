import Search from '../components/Search/Search'
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native'
import CategoryItem from '../components/CategoryItem/CategoryItem'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/shopService'
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient'
import Spinner from '../components/Spinner/Spinner'
import { useState, useEffect } from 'react'

const CategoriesScreen = ({ navigation }) => {

  //const categories = useSelector(state => state.shopReducer.categories)
  const { data, isLoading, error } = useGetCategoriesQuery()
  const [search, setSearch] = useState('')



  /*   useEffect(() => {
  
      if (!isLoading) {
        // Para quedarme solamente con los valores de Firebase y no con los índices
        const productsValues = Object.values(productsFilteredByCategory)
        const productsFilteredByName = productsValues.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
        setProductsByCategory(productsFilteredByName)
      }
  
    }, [isLoading, search]) */

  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  const onSearch = (search) => {
    setSearch(search);
  };

  return (
    <BackgroundGradient>
      {isLoading ? <Spinner /> :
        <View>
          <Search onSearchHandlerEvent={onSearch} />
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
