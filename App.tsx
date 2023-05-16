import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Header } from "./src/components/Header";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <Routes />
      </SafeAreaProvider>
    </>
  );
}
