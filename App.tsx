import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen/HomeScreen";
import ServicesScreen from "./app/screens/ServicesScreen/ServicesScreen";
import { createStaticNavigation } from "@react-navigation/native";
import ActivityScreen from "./app/screens/ActivityScreen/ActivityScreen";
import AccountScreen from "./app/screens/AccountScreen/AccountScreen";

const RootTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Services: ServicesScreen,
    Activity: ActivityScreen,
    Account: AccountScreen,
  },
});

const Navigation = createStaticNavigation(RootTabs);

export default function App() {
  return <Navigation />;
}
