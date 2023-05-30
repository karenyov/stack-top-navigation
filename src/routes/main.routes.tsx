import { createDrawerNavigator } from "@react-navigation/drawer";

import { FontAwesome } from "@expo/vector-icons";

import { Profile } from "../pages/Profile";
import { CustomDrawer } from "../components/CustomDrawer";
import { Message } from "../pages/Message";
import { Template } from "../components/Template";
import { AppRoutes } from "./top-tabs/app.routes";

const { Navigator, Screen } = createDrawerNavigator();

export function MainRoutes() {
  return (
    <>
      <Template>
        <Navigator
          initialRouteName="HomeStack"
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{
            headerShown: false,
            drawerActiveTintColor: "#0ea5e9",
            drawerInactiveTintColor: "#71717a",
          }}
        >
          <Screen
            name="HomeStack"
            component={AppRoutes}
            options={{
              drawerLabel: "Home",
              drawerIcon: ({ focused, color, size }) => (
                <FontAwesome name="home" size={20} color={color} />
              ),
            }}
          />

          <Screen
            name="Profile"
            component={Profile}
            options={{
              drawerLabel: "Perfil",
              drawerIcon: ({ focused, color, size }) => (
                <FontAwesome name="user" size={20} color={color} />
              ),
            }}
          />
          <Screen
            name="Message"
            component={Message}
            options={{
              drawerLabel: "Mensagens",
              drawerIcon: ({ focused, color, size }) => (
                <FontAwesome name="envelope" size={15} color={color} />
              ),
            }}
          />
        </Navigator>
      </Template>
    </>
  );
}
