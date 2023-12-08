import { StyleSheet, View, ActivityIndicator, StatusBar } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { myFonts } from './src/global/myFonts';
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen';

export default function App() {
  const [fontsLoaded] = useFonts(myFonts)

  if (!fontsLoaded) {
    return <ActivityIndicator style={{ flex: 1, backgroundColor: colors.darkBlue }} animating={true} hidesWhenStopped={true} size='large' color={colors.paleGoldenRod} />
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      {/* <CategoriesScreen /> */}
      <ProductsByCategoryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'space-between',
  },
});
