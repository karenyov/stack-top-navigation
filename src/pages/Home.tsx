import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export function Home() {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
}
