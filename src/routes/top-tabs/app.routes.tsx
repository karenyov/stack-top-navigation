import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";

import { View, Text } from "react-native";

import { Home } from "../../pages/Home";
import { Settings } from "../../pages/Settings";

import { Header } from "../../components/Header";

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function AppRoutes() {
  const navProps: MaterialTopTabNavigationOptions = {
    tabBarLabelStyle: { fontSize: 14, textTransform: "capitalize" }, // Set font size and lowercase text
    tabBarActiveTintColor: "white",
    tabBarStyle: { backgroundColor: "black" },
    tabBarIndicatorStyle: {
      backgroundColor: "cyan", // Color for the indicator
      height: 2, // Height of the indicator
    },
  };

  const tabBarOptions = {
    labelStyle: { textTransform: "uppercase" }, // Set the label text to uppercase
    activeTintColor: "blue",
    inactiveTintColor: "gray",
  };

  return (
    <>
      <View
        style={{
          height: 70,
          backgroundColor: "black",
        }}
      >
        <View
          style={{
            marginTop: 25,
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>My App</Text>
          <Header />
        </View>
      </View>

      <Navigator
        initialRouteName="home"
        screenOptions={navProps}
        backBehavior="history"
      >
        <Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={{ tabBarLabel: "Settings" }}
        />
      </Navigator>
    </>
  );
}
