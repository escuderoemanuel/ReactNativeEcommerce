import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { myFonts } from './src/global/myFonts';
import { useState } from 'react';
import { StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import Navigator from './src/navigation/Navigator';

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

  /* const onReturnHome = () => {
    setCategorySelected('')
    setProductIdSelected(null)
  } */

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (
    <>
      <StatusBar />
      <Navigator />
    </>
  );
}

const styles = StyleSheet.create({

});
