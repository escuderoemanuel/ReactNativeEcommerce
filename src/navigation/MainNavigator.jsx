import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';



const MainNavigator = () => {
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default MainNavigator