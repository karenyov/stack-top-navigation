import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { List } from "../pages/List";
import { AppRoutes } from "./top-tabs/app.routes";
import { Header } from "../components/Header";

const { Navigator, Screen } = createStackNavigator();

export function MainRoutes() {
  const navProps: StackNavigationOptions = {
    headerStyle: { backgroundColor: "black" },
    headerTintColor: "white",
    headerRight: () => <Header />,
  };

  return (
    <Navigator initialRouteName="TabStack" screenOptions={navProps}>
      <Screen
        name="list"
        component={List}
        options={{
          title: "List",
        }}
      />
      <Screen
        name="TabStack"
        component={AppRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
