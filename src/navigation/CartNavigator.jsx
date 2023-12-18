import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import Header from '../components/Header/Header'


const Stack = createNativeStackNavigator();

const CartNavigator = () => {

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

    </Stack.Navigator>
  );
}

export default CartNavigator;
