import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

import { useAuth } from "../../hooks/auth";

const Feed = () => {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>name: {user.user.name}</Text>
      <Text>token: {user.token}</Text>
      <TouchableOpacity
        style={{
          width: 200,
          padding: 20,
          margin: 20,
          backgroundColor: "#39414e",
        }}
        onPress={() => signOut()}
      >
        <Text style={{ textAlign: "center", color: "#e2e6ea" }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feed;
