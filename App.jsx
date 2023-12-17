import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { myFonts } from './src/global/myFonts';
import { ActivityIndicator, StatusBar } from 'react-native';
import Navigator from './src/navigation/Navigator';

export default function App() {
  const [fontsLoaded] = useFonts(myFonts)

  if (!fontsLoaded) {
    return <ActivityIndicator style={{ flex: 1, backgroundColor: colors.darkBlue }} animating={true} hidesWhenStopped={true} size='large' color={colors.paleGoldenRod} />
  }

  return (
    <>
      <StatusBar Style='auto' backgroundColor={colors.darkBlue} />
      <Navigator />
    </>
  );
}
