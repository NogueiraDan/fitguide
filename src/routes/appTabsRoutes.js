import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../screens/Profile";
import Wishlist from "../screens/Wishlist";
import StackRoutes from "./appStacksRoutes";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f3f3f3",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="StackRoutes"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ size }) => {
            <Ionicons name="home-outline" color="red" size={size} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size }) => {
            <Ionicons name="home-outline" color="red" size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ size }) => {
            <Ionicons name="home" color="blue" size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
