import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen/HomeScreen";
import ServicesScreen from "./app/screens/ServicesScreen/ServicesScreen";
import { createStaticNavigation } from "@react-navigation/native";
import ActivityScreen from "./app/screens/ActivityScreen/ActivityScreen";
import AccountScreen from "./app/screens/AccountScreen/AccountScreen";
import { HeroIcon } from "./app/components/HeroIcon";
import { useFonts } from "expo-font";

const RootTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <HeroIcon name="home" color={color} size={size} />
        ),
      },
    },
    Services: {
      screen: ServicesScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <HeroIcon name="squares-2x2" color={color} size={size} />
        ),
      },
    },
    Activity: {
      screen: ActivityScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <HeroIcon name="clock" color={color} size={size} />
        ),
      },
    },
    Account: {
      screen: AccountScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <HeroIcon name="user" color={color} size={size} />
        ),
      },
    },
  },
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: "#000",
  },
});

const Navigation = createStaticNavigation(RootTabs);

export default function App() {
  const [fontsLoaded] = useFonts({
    HeroIcons: require("./assets/heroicons/solid.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Navigation />;
}
