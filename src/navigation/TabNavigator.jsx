import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image } from "react-native";
import { colors } from '../global/colors';
import user from '../../assets/img/users.png'
import list from '../../assets/img/list.png'
import cart from '../../assets/img/cart2.png'
import shop from '../../assets/img/shop.png'
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import OrdersNavigator from './OrdersNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen name="ShopStack" component={ShopNavigator} options={{
        tabBarIcon: () => (
          <Image source={shop} style={{ width: 30, height: 30 }} />
        ),

      }} />
      <Tab.Screen name="CartStack" component={CartNavigator} options={{
        tabBarIcon: () => (
          <Image source={cart} style={{ width: 30, height: 30 }} />
        ),
      }} />
      <Tab.Screen
        name="OrderStack"
        component={OrdersNavigator}
        options={{
          tabBarIcon: () => (
            <Image source={list} style={{ width: 30, height: 20 }} />
          )
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileNavigator}
        options={{
          tabBarIcon: () => (
            <Image source={user} style={{ width: 30, height: 30 }} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.darkBlue,
  },
  selected: {
    fontSize: 28,
    color: colors.textLight,
  },
  deselected: {
    fontSize: 24,
    color: colors.greyLabel1,
  }
})