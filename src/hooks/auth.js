/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../http/api";

const AuthContextData = createContext();

const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const [token, user] = await AsyncStorage.multiGet([
        "@app:token",
        "@app:user",
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;
        setUserAuth({
          token: token[1],
          user: JSON.parse(user[1]),
        });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signUser = useCallback(async () => {
    // { login, password }
    // const { token, user } = await api.post("authenticate/signin", {
    //   login,
    //   password,
    // });

    const token = "hueuheuhe";
    const user = {
      name: "Luiz Mauro",
    };

    await AsyncStorage.multiSet([
      ["@app:token", token],
      ["@app:user", JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUserAuth({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@app:token", "@app:user"]);

    setUserAuth({});
  }, []);

  return (
    <AuthContextData.Provider
      value={{
        user: userAuth,
        loading,
        signUser,
        signOut,
      }}
    >
      {children}
    </AuthContextData.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContextData);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
