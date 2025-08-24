import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View className="flex-1">
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
