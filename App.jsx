import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { myFonts } from './src/global/myFonts';
import { useState } from 'react';
import { StyleSheet, ActivityIndicator, StatusBar, SafeAreaView } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';

export default function App() {
  const [fontsLoaded] = useFonts(myFonts)
  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)



  if (!fontsLoaded) {
    return <ActivityIndicator style={{ flex: 1, backgroundColor: colors.darkBlue }} animating={true} hidesWhenStopped={true} size='large' color={colors.paleGoldenRod} />
  }

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onReturnHome = () => {
    setCategorySelected('')
    setProductIdSelected(null)
  }

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (
    < SafeAreaView style={styles.container} >
      <StatusBar backgroundColor={colors.darkBlue} />

      {
        productIdSelected ?
          <ProductDetailScreen
            category={categorySelected}
            productId={productIdSelected}
            returnHomeHandlerEvent={onReturnHome} />
          :
          categorySelected ?
            <ProductsByCategoryScreen
              category={categorySelected}
              onSelectProductIdEvent={onSelectProductId}
              returnHomeHandlerEvent={onReturnHome}
            />
            :
            <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
      }
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'space-between',
    padding: 10,
    /* paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, */
  },
});
