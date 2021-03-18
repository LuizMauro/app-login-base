import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

import { useAuth } from "../../hooks/auth";

const Login = () => {
  const { signUser } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          width: 200,
          padding: 20,
          margin: 20,
          backgroundColor: "#39414e",
        }}
        onPress={() => signUser()}
      >
        <Text style={{ textAlign: "center", color: "#e2e6ea" }}>Logar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
