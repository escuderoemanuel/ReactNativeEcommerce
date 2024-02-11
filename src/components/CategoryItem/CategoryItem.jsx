import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Card from '../Card/Card'
import { colors } from '../../global/colors'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../features/shopSlice'

//!
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
//!


const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch()

  //!

  const ThumbnailList = ({ category }) => {
    const thumbnailsArray = useSelector(state => state.shopReducer.categoryThumbnails);
    const thumbnailObj = thumbnailsArray.find(obj => Object.keys(obj)[0] === category);
    const thumbnailUrl = thumbnailObj ? thumbnailObj[category].thumbnail : null;

    return (
      <View>
        {thumbnailUrl && (
          <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        )}
      </View>
    );
  };


  //!


  return (

    <TouchableOpacity style={styles.categoryItemContainer}
      onPress={() => {
        dispatch(setCategorySelected(category))
        navigation.navigate('PRODUCTS', { category })

      }}
      accessibilityRole="button"
      accessibilityLabel={`Ver productos de la categoría ${category}`}
    >
      < Card style={styles.categoryItem} >
        <ThumbnailList category={category} />
        <Text style={styles.categoryItemText}>{category}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  categoryItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    width: 160,
    height: 220,
    backgroundColor: colors.golden,
    margin: 10,
    borderRadius: 12,
    borderColor: colors.textLight,
    borderWidth: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  categoryItemText: {
    height: 60,
    color: colors.golden,
    color: colors.darkBlue,
    color: colors.textLight,
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  thumbnail: {
    width: 160,
    height: 160,
  },
})