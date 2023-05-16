import { TouchableOpacity, View } from "react-native";

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";

import { Home } from "../../pages/Home";
import { Settings } from "../../pages/Settings";

const { Navigator, Screen } = createBottomTabNavigator();

const CustomHeader = ({ navigation }: any) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
    >
      <TouchableOpacity>
        <AntDesign name="logout" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export function AppRoutes() {
  const navProps: BottomTabNavigationOptions = {
    // headerShown: false,
    headerTintColor: "white",
    tabBarLabelPosition: "beside-icon",
    tabBarActiveTintColor: "cyan",
    tabBarInactiveTintColor: "white",
    tabBarStyle: {
      backgroundColor: "black",
    },
    headerStyle: {
      backgroundColor: "black",
    },
    headerRight: () => <CustomHeader />,
  };

  return (
    <Navigator screenOptions={navProps} backBehavior="history">
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
