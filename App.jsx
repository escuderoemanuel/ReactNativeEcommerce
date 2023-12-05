import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Categories from './src/screens/Categories';
import { colors } from './src/global/colors';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Categories />

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
