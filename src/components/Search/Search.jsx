import { TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../global/colors'
import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const Search = () => {
  const [searchInput, setSearchInput] = useState('')


  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        /* value={searchInput} */
        onChangeText={(text) => setSearchInput(text)}
      >{searchInput}</TextInput>
      <View style={styles.searchIcons}>
        <TouchableOpacity onPress={null}>
          <EvilIcons name="trash" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={null}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View >
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    backgroundColor: colors.paleGoldenRod,
    borderColor: colors.paleGoldenRod,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  searchIcons: {
    flexDirection: 'row',
    gap: 10,
  }
})