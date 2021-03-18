import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import PrivateRoutes from "./Private/feed.routes";
import PageAccount from "../screens/Private/Account";

const Tab = createMaterialBottomTabNavigator();

export default function PrivateRouter() {
  return (
    <Tab.Navigator
      initialRouteName="FeedRoute"
      activeColor="#fe4c42"
      inactiveColor="#e2e6ea"
      barStyle={{
        backgroundColor: "#39414e",
      }}
    >
      <Tab.Screen
        name="FeedRoute"
        component={PrivateRoutes}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="AccountRoute"
        component={PageAccount}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
