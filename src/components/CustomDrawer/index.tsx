import { Text, View, TouchableOpacity, Image } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import logo from "../../assets/avatar.png";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { styles } from "./styles";

export function CustomDrawer(props: any) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: "#0ea5e9" }}
      >
        <View style={styles.header}>
          <Image
            source={logo}
            style={{
              height: 75,
              width: 75,
              borderRadius: 40,
              marginBottom: 5,
            }}
          />

          <Text style={{ color: "#fff" }}>Nome Sobrenome</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="logout" size={20} color="black" />
          <Text style={{ marginLeft: 5 }}>Sair</Text>
        </View>
      </View>
    </View>
  );
}
