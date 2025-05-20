import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";

import { HeroIcon } from "@components/HeroIcon";

import HomeScreen from "@screens/HomeScreen/HomeScreen";
import ServicesScreen from "@screens/ServicesScreen/ServicesScreen";
import RideScreen from "@screens/RideScreen/RideScreen";
import PackageScreen from "@screens/PackageScreen/PackageScreen";
import ReserveScreen from "@screens/ReserveScreen/ReserveScreen";
import RentScreen from "@screens/RentScreen/RentScreen";
import ActivityScreen from "@screens/ActivityScreen/ActivityScreen";
import AccountScreen from "@screens/AccountScreen/AccountScreen";
import { StatusBar } from "expo-status-bar";

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

  return (
    <>
      <Navigation />
      <StatusBar style="dark" />
    </>
  );
}

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
