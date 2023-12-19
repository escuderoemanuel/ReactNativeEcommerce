import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Header/Header'
import CartScreen from '../screens/CartScreen';


const Stack = createNativeStackNavigator();

const CartNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName='Cart'
      screenOptions={
        ({ navigation, route }) => ({
          header: () => <Header title={route.name} navigation={navigation} />,
        })
      }
    >
      <Stack.Screen
        name='Cart'
        component={CartScreen}
        options={{ title: 'Title ' }}
      />

    </Stack.Navigator>
  );
}

export default CartNavigator;
