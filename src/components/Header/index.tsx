import { Text, View, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="logout" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}
