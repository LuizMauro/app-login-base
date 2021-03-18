import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FeedScreen from "../../screens/Private/Feed";

const { Navigator, Screen } = createStackNavigator();

export default function FeedRoutes() {
  return (
    <Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#f2f3f5" },
      }}
    >
      <Screen name="Feed" component={FeedScreen} />
    </Navigator>
  );
}
