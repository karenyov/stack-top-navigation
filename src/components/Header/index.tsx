import { Text, View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

import { styles } from "./styles";

export function Header() {
  const navigation = useNavigation();

  function handleOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <Feather name="menu" size={20} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>My App</Text>

      <TouchableOpacity>
        <MaterialIcons name="notifications-off" size={20} color="white" />
      </TouchableOpacity>

      {/* <TouchableOpacity>
        <MaterialIcons name="notifications-on" size={20} color="white" />
      </TouchableOpacity> */}
    </View>
  );
}
