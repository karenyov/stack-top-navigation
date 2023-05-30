import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Header } from "./src/components/Header";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#0284c7"
          translucent
        />

        <Routes />
      </SafeAreaProvider>
    </>
  );
}
