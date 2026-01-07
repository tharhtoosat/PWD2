import { useApp } from "@/components/app-provider";
import { api } from "@/libs/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useApp();

  const login = async () => {
    const res = await fetch(`${api}/users/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const { user, token } = await res.json();
      setAuth(user);
      await AsyncStorage.setItem("token", token);
      router.push("/");
    } else {
      alert("Unable to login");
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>Profile Page</Text>
      {auth ? (
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>{auth.name}</Text>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "red",
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setAuth(undefined)}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ marginTop: 20 }}>
          <TextInput
            autoCapitalize="none"
            placeholder="username"
            value={username}
            onChangeText={setUsername}
            style={{
              padding: 10,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#66666650",
              fontSize: 16,
              backgroundColor: "white",
              marginBottom: 6,
              width: 300,
            }}
          />
          <TextInput
            secureTextEntry
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            style={{
              padding: 10,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "#66666650",
              fontSize: 16,
              backgroundColor: "white",
              marginBottom: 6,
              width: 300,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={login}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
