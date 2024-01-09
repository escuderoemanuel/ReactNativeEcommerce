import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header/Header'
import SignupScreen from '../screens/SignupScreen'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={
        ({
          navigation, route }) => ({
            header: () => <Header title={route.name} navigation={navigation} />,
          })
      }>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>)
}

export default AuthNavigator