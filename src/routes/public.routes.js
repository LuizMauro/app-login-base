import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Public/Login";

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="Login" component={Login} />
  </Auth.Navigator>
);

export default AuthRoutes;
