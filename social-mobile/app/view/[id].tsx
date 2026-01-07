import Comment from "@/components/comment";
import Post from "@/components/post";
import { PostType } from "@/types/global";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { api } from "@/libs/config";
export default function Home() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: async (): Promise<PostType> => {
      const res = await fetch(`${api}/posts/${id}`);
      return res.json();
    },
  });
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{error.message}</Text>
      </View>
    );
  }
  if (!post) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Post not found!</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Post key={post.id} post={post} />
      <View style={{ margin: 10 }}>
        <TextInput
          placeholder="Your reply"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#66666650",
            fontSize: 16,
            backgroundColor: "white",
            marginBottom: 6,
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
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Add Comment
          </Text>
        </TouchableOpacity>
      </View>
      {post.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </ScrollView>
  );
}
