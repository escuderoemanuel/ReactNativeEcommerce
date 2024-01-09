import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { myFonts } from './src/global/myFonts';
import { ActivityIndicator, StatusBar } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts(myFonts)

  if (!fontsLoaded) {
    return <ActivityIndicator style={{ flex: 1, backgroundColor: colors.darkBlue }} animating={true} hidesWhenStopped={true} size='large' color={colors.paleGoldenRod} />
  }

  return (
    <>
      <StatusBar Style='light' backgroundColor={colors.darkBlue} />
      <Provider store={store} >
        <MainNavigator />
      </Provider>
    </>
  );
}