import { StyleSheet, View, ActivityIndicator, StatusBar } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { myFonts } from './src/global/myFonts';
import { useState } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts(myFonts)
  const [categorySelected, setCategorySelected] = useState('')
  console.log('Categoria seleccionada', categorySelected)

  if (!fontsLoaded) {
    return <ActivityIndicator style={{ flex: 1, backgroundColor: colors.darkBlue }} animating={true} hidesWhenStopped={true} size='large' color={colors.paleGoldenRod} />
  }

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onReturnHome = () => {
    setCategorySelected('')
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <>
        {
          categorySelected ?
            <ProductsByCategoryScreen category={categorySelected} returnHomeHandlerEvent={onReturnHome} />
            :
            <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
        }
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'space-between',
    padding: 10
  },
});
