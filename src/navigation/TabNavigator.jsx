import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import { colors } from '../global/colors';

import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import OrdersNavigator from './OrdersNavigator';

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
        <Tab.Screen name="ShopStack" component={ShopNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="storefront" style={focused ? styles.selected : styles.deselected} />
          ),

        }} />
        <Tab.Screen name="CartStack" component={CartNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="cart" style={focused ? styles.selected : styles.deselected} />
          ),
        }} />
        <Tab.Screen
          name="OrderStack"
          component={OrdersNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Octicons name="list-unordered" style={focused ? styles.selected : styles.deselected} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer >
  )
}
export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.darkBlue,
  },
  selected: {
    fontSize: 28,
    color: colors.paleGoldenRod,
  },
  deselected: {
    fontSize: 24,
    color: colors.greyLabel,

  }
})