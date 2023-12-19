import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ShopStack" component={ShopNavigator} />
        <Tab.Screen name="CartStack" component={CartNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default TabNavigator; 