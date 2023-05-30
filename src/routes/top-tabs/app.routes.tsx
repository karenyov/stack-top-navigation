import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";

import { Home } from "../../pages/Home";

import { Calendar } from "../../pages/Calendar";

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function AppRoutes() {
  const navProps: MaterialTopTabNavigationOptions = {
    tabBarLabelStyle: { fontSize: 14, textTransform: "capitalize" }, // Set font size and lowercase text
    tabBarActiveTintColor: "white",
    tabBarStyle: { backgroundColor: "#0ea5e9" },
    tabBarIndicatorStyle: {
      backgroundColor: "#bae6fd", // Color for the indicator
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
          name="Calendar"
          component={Calendar}
          options={{ tabBarLabel: "Calendar" }}
        />
      </Navigator>
    </>
  );
}
