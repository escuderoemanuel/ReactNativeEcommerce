import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { myFonts } from './src/global/myFonts';

export default function App() {
  const [fontsLoaded] = useFonts(myFonts)

  if (!fontsLoaded) {
    return <ActivityIndicator style={{ flex: 1, backgroundColor: colors.darkBlue }} animating={true} hidesWhenStopped={true} size='large' color={colors.paleGoldenRod} />
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <CategoriesScreen />


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
