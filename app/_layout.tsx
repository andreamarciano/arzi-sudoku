import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { ThemeProvider } from "src/contexts/GlobalContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <View className="flex-1">
        <StatusBar hidden />
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </ThemeProvider>
  );
}
