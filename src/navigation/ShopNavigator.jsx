import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen';
import Header from '../components/Header/Header'

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {

  return (
    <Stack.Navigator
      initialRouteName='CATEGORIES'
      screenOptions={
        ({ navigation, route }) => ({
          header: () => <Header title={route.name} navigation={navigation} />,
        })
      }
    >
      <Stack.Screen
        name='CATEGORIES'
        component={CategoriesScreen}
        options={{ title: 'Title ' }}
      />
      <Stack.Screen
        name='PRODUCTS'
        component={ProductsByCategoryScreen}
        options={({ route }) => ({ title: route.params?.category || 'Title ' })}
      />
      <Stack.Screen
        name='DETAIL'
        component={ProductDetailScreen}
        options={{ title: 'Title ' }}
      />
    </Stack.Navigator>
  );
}

export default ShopNavigation;
