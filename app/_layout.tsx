import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import Topbar from "@components/layouts/topbar";
import Sidebar from "@components/layouts/sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <View className="flex-1">
      <StatusBar hidden />
      <Topbar title="Sudoku" onMenuPress={() => setSidebarOpen(true)} />
      <Sidebar visible={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
