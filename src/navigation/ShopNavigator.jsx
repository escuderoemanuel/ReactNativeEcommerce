import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen';
import Header from '../components/Header/Header'


// ToDo:
//! Que en la  initialRouteName no se muestren los iconos de navegación
//! Que en el title del Header, se muestre el nombre de la categoría o producto

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {

  return (
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
        options={{ title: 'Title ' }}
      />
      <Stack.Screen
        name='ProductsByCategory'
        component={ProductsByCategoryScreen}
        options={({ route }) => ({ title: route.params?.category || 'Title ' })}
      />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetailScreen}
        options={{ title: 'Title ' }}
      />

    </Stack.Navigator>
  );
}

export default ShopNavigation;
