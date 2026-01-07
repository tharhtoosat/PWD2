import { api } from "@/libs/config";
import { PostType } from "@/types/global";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useApp } from "./app-provider";

export default function Post({ post }: { post: PostType }) {
  const queryClient = useQueryClient();
  const { auth } = useApp();
  const like = async () => {
    const token = await AsyncStorage.getItem("token");
    await fetch(`${api}/posts/${post.id}/like`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await queryClient.invalidateQueries({
      queryKey: ["posts"],
    });
    await queryClient.invalidateQueries({
      queryKey: ["post"],
    });
  };
  const unlike = async () => {
    const token = await AsyncStorage.getItem("token");
    await fetch(`${api}/posts/${post.id}/like`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await queryClient.invalidateQueries({
      queryKey: ["posts"],
    });
    await queryClient.invalidateQueries({
      queryKey: ["post"],
    });
  };
  const isLiked = auth
    ? post.likes.some((like) => like.userId === auth.id)
    : false;
  return (
    <View
      style={{
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderColor: "#66666630",
        backgroundColor: "white",
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            height: 52,
            width: 52,
            borderRadius: 52,
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            {post.user.name[0]}
          </Text>
        </View>

        <View style={{ flexShrink: 1 }}>
          <Text style={{ fontSize: 18 }}>{post.user.name}</Text>
          <Text style={{ color: "green" }}>{post.createdAt}</Text>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/view/[id]",
                params: { id: post.id },
              })
            }
          >
            <Text style={{ marginTop: 5, fontSize: 16 }}>{post.content}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 15,
        }}
      >
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          {isLiked ? (
            <TouchableOpacity onPress={unlike}>
              <Ionicons name="heart" size={24} color="red" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={like}>
              <Ionicons name="heart-outline" size={24} color="red" />
            </TouchableOpacity>
          )}
          <Text>{post.likes.length}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={24} color="gray" />
          </TouchableOpacity>
          <Text>{post.comments.length}</Text>
        </View>
      </View>
    </View>
  );
}
