import { ReactNode } from "react";

import { Text, View, TouchableOpacity } from "react-native";
import { Header } from "../Header";

type Props = {
  children: ReactNode;
};

export function Template({ children }: Props) {
  return (
    <>
      <View style={{ height: "10%" }}>
        <Header />
      </View>

      <View style={{ flex: 1 }}>{children}</View>
    </>
  );
}
