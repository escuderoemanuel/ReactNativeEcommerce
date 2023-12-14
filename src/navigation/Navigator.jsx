import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen from '../screens/CategoriesScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen';
import Header from '../components/Header/Header'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Categories'
        screenOptions={
          ({ navigation, route }) => ({
            header: () => <Header title={route.name} navigation={navigation} />,
          })
        }
      >
        <Stack.Screen
          name='Categories'
          component={CategoriesScreen}
        />
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetailScreen}
        />
        <Stack.Screen
          name='ProductsByCategory'
          component={ProductsByCategoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default Navigation;