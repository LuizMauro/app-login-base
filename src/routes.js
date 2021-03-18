/* eslint-disable no-nested-ternary */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View, ActivityIndicator } from "react-native";
import { useAuth } from "./hooks/auth";

import PublicRoutes from "./routes/public.routes";
import PrivateRoutes from "./routes/private.routes";
const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  if (user && Object.keys(user).length !== 0) {
    return (
      <Navigator>
        <Screen
          name="private"
          component={PrivateRoutes}
          options={{ headerShown: false }}
        />
      </Navigator>
    );
  } else {
    return <PublicRoutes />;
  }
}
