import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { myFonts } from './src/global/myFonts';
import { StatusBar } from 'react-native';
import Spinner from './src/components/Spinner/Spinner';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts(myFonts)

  if (!fontsLoaded) {
    return <Spinner />
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