import { CommentType } from "@/types/global";
import { Text, View } from "react-native";

export default function Comment({ comment }: { comment: CommentType }) {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderColor: "#66666630",
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            height: 52,
            width: 52,
            borderRadius: 52,
            backgroundColor: "gray",
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
            {comment.user.name[0]}
          </Text>
        </View>

        <View style={{ flexShrink: 1 }}>
          <Text style={{ fontSize: 18 }}>{comment.user.name}</Text>
          <Text style={{ marginTop: 5, fontSize: 16 }}>{comment.content}</Text>
        </View>
      </View>
    </View>
  );
}
