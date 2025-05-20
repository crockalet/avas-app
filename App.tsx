import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen/HomeScreen";
import ServicesScreen from "./app/screens/ServicesScreen/ServicesScreen";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import ActivityScreen from "./app/screens/ActivityScreen/ActivityScreen";
import AccountScreen from "./app/screens/AccountScreen/AccountScreen";
import { HeroIcon } from "./app/components/HeroIcon";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RideScreen from "./app/screens/RideScreen/RideScreen";
import PackageScreen from "./app/screens/PackageScreen/PackageScreen";
import ReserveScreen from "./app/screens/ReserveScreen/ReserveScreen";
import RentScreen from "./app/screens/RentScreen/RentScreen";

const MainTabs = createBottomTabNavigator({
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

const RootStack = createNativeStackNavigator({
  screens: {
    Main: {
      screen: MainTabs,
      options: {
        headerShown: false,
      },
    },
    Ride: RideScreen,
    Package: PackageScreen,
    Reserve: ReserveScreen,
    Rent: RentScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  const [fontsLoaded] = useFonts({
    HeroIcons: require("./assets/heroicons/solid.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Navigation />;
}

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
