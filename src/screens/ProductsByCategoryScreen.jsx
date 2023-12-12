import { FlatList, View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem/ProductItem'
import Search from '../components/Search/Search'
import NoSearchResult from '../components/NoSearchResult/NoSearchResult'


const ProductsByCategoryScreen = ({ category, returnHomeHandlerEvent, onSelectProductIdEvent }) => {
  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const productsFilteredByCategory = products_data.filter(product => product.category.toLowerCase() === category.toLowerCase())
    const productsFilteredByName = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFilteredByName)
  }, [category, search])


  const renderProductItem = ({ item }) => (
    <ProductItem product={item} onSelectProductIdEvent={onSelectProductIdEvent} />
  )

  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
      <Header title='Products By Categories' returnHomeHandlerEvent={returnHomeHandlerEvent} />
      <Search onSearchHandlerEvent={onSearch} />

      {productsByCategory.length === 0 && (
        <NoSearchResult />
      )}

      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default ProductsByCategoryScreen