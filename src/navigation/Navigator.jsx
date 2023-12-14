import CategoriesScreen from '../screens/CategoriesScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={CategoriesScreen} />
        <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
        <Stack.Screen name='ProductByCategory' component={ProductsByCategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default Navigation;