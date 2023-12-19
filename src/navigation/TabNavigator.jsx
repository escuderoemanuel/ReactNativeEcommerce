import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import { colors } from '../global/colors';
 
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen name="ShopStack" component={ShopNavigator} />
        <Tab.Screen name="CartStack" component={CartNavigator} />
      </Tab.Navigator>
    </NavigationContainer >
  )
}
export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.darkBlue,
  }
})