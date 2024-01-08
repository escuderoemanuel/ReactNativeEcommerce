import Header from '../components/Header/Header'

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={
        ({
          navigation, route }) => ({
            header: () => <Header title={route.name} navigation={navigation} />,
          })
      }>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>)
}

export default AuthNavigator