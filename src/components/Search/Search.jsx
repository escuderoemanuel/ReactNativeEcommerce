import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { colors } from '../../global/colors'
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const Search = ({ onSearchHandlerEvent }) => {
  const [searchInput, setSearchInput] = useState('')


  return (
    <View style={styles.searchContainer}>

      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={setSearchInput}
        value={searchInput}
      />

      <View style={styles.searchIcons}>

        <TouchableOpacity onPress={() => { setSearchInput('') }}>
          <EvilIcons name="trash" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onSearchHandlerEvent(searchInput)}>
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
  searchInput: {
    width: '80%',
  },
  searchIcons: {
    flexDirection: 'row',
    gap: 10,
  }
})