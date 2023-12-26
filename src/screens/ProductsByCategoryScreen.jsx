import { FlatList, View, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem/ProductItem'
import Search from '../components/Search/Search'
import NoSearchResult from '../components/NoSearchResult/NoSearchResult'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'

const ProductsByCategoryScreen = ({ navigation }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  const category = useSelector(state => state.shopReducer.categorySelected)
  const productsFilteredByCategory = useSelector(state => state.shopReducer.productsFilteredByCategory)


  useEffect(() => {
    const productsFilteredByName = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFilteredByName)
  }, [category, search])


  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  )

  const onSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={style.container}>

      <Search onSearchHandlerEvent={onSearch} />

      <>

        {productsByCategory.length === 0 && (
          <NoSearchResult />
        )}

        <FlatList
          style={style.containerProductsByCategory}
          data={productsByCategory}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
        />


      </>

    </View >
  )
}

export default ProductsByCategoryScreen

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  containerProductsByCategory: {
    marginBottom: 10
  }
})