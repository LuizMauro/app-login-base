import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Providers from "./src/hooks";

import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Providers>
        <Routes />
      </Providers>
      <StatusBar style="light" backgroundColor={"#39414e"} />
    </NavigationContainer>
  );
}
