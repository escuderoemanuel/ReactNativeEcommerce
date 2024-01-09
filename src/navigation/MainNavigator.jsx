import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

const MainNavigator = () => {
  const user = useSelector(state => state.authReducer.user)
  //const user = ''

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default MainNavigator