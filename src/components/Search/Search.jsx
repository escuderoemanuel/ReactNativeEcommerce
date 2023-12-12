import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native'
import { useState } from 'react'
import { colors } from '../../global/colors'
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const Search = ({ onSearchHandlerEvent }) => {
  const [searchInput, setSearchInput] = useState('')
  const [error, setError] = useState('')

  const onSearchHandler = () => {
    const regEx = /[^\w\s]/
    if ((regEx.test(searchInput) || searchInput === '')) {
      setError('Only letters and numbers are allowed!')
      setSearchInput('')
    } else {
      setError('')
      onSearchHandlerEvent(searchInput)
      setSearchInput('')
    }
  }

  const onResetSearchHandler = () => {
    setSearchInput('')
    setError('')
    onSearchHandlerEvent(searchInput)
  }

  return (
    <View style={styles.searchContainerGlobal}>
      <View style={styles.searchContainer}>

        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={setSearchInput}
          value={searchInput}
        />

        <View style={styles.searchIcons}>

          <Pressable onPress={onResetSearchHandler}>
            <EvilIcons name="trash" size={30} color="black" />
          </Pressable>
          <Pressable onPress={() => { onSearchHandler(searchInput) }}>
            <AntDesign name="search1" size={24} color="black" />
          </Pressable>

        </View>
      </View >
      {
        error &&
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>

      }
    </View>
  )
}


export default Search

const styles = StyleSheet.create({
  searchContainerGlobal: {
    width: '100%',
    padding: 10,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: colors.paleGoldenRod,
    borderColor: colors.paleGoldenRod,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    width: '80%',
  },
  searchIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  errorMessageContainer: {
    padding: 10,
    backgroundColor: colors.redLabel,
    borderRadius: 7,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.greyLabel,
  }
}
)