import { FlatList, View, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem/ProductItem'
import Search from '../components/Search/Search'
import NoSearchResult from '../components/NoSearchResult/NoSearchResult'
import { colors } from '../global/colors'

const ProductsByCategoryScreen = ({ navigation, route }) => {
  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  console.log("Route params: ", route.params)
  console.log("Route params category: ", route.params.category)
  const { category } = route.params


  useEffect(() => {
    const productsFilteredByCategory = products_data.filter(product => product.category.toLowerCase() === category.toLowerCase())
    const productsFilteredByName = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFilteredByName)
  }, [category, search])


  const renderProductItem = ({ item }) => (
    <ProductItem product={item} navigation={navigation} />
  )

  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <View style={style.container}>
      {/*  <Header title='Products By Categories' /> */}

      <Search onSearchHandlerEvent={onSearch} />

      <View >

        {productsByCategory.length === 0 && (
          <NoSearchResult />
        )}

        <FlatList
          style={style.containerProductsByCategory}
          data={productsByCategory}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
        />

      </View>

    </View>
  )
}

export default ProductsByCategoryScreen

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  containerProductsByCategory: {
    marginBottom: 80
  }
})