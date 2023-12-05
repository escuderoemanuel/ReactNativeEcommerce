import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import Categories from './src/screens/Categories';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Categories />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
