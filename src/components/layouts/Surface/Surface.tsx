import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import ThemedView from "../ThemedView";
import { theme } from "@assets/styles/theme";
import { useTheme } from "src/contexts/GlobalContext";

type SurfaceProps = {
  children?: React.ReactNode;
  fullHeight?: boolean;
  className?: string;
};

type SurfaceHeaderProps = {
  title: string;
  right?: React.ReactNode;
};

type SurfaceSectionProps = {
  children?: React.ReactNode;
};

const Surface: React.FC<SurfaceProps> & {
  Header: React.FC<SurfaceHeaderProps>;
  Body: React.FC<SurfaceSectionProps>;
} = ({ children, fullHeight = true, className = "" }) => {
  return (
    <ThemedView
      variant="background"
      className={`flex-1 ${fullHeight ? "items-center justify-center" : ""} ${className}`}
    >
      {children}
    </ThemedView>
  );
};

Surface.Header = ({ title, right }) => {
  const { theme: currentTheme } = useTheme();
  const colors = theme[currentTheme];

  return (
    <SafeAreaView className={`${colors.surface} shadow w-full pt-6`}>
      <View className="w-full flex-row justify-between items-center p-4">
        <Text className={`text-xl font-bold ${colors.text}`}>{title}</Text>
        {right}
      </View>
    </SafeAreaView>
  );
};

Surface.Body = ({ children }) => (
  <View className="flex-1 items-center justify-center p-4">{children}</View>
);

export default Surface;
