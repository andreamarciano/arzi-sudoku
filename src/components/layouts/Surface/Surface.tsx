import { View, Text, SafeAreaView } from "react-native";
import React from "react";

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
    <View
      className={`flex-1 bg-gray-100 ${fullHeight ? "items-center justify-center" : ""} ${className}`}
    >
      {children}
    </View>
  );
};

Surface.Header = ({ title, right }) => (
  <SafeAreaView className="bg-white shadow w-full pt-6">
    <View className="w-full flex-row justify-between items-center p-4">
      <Text className="text-xl font-bold">{title}</Text>
      {right}
    </View>
  </SafeAreaView>
);

Surface.Body = ({ children }) => (
  <View className="flex-1 items-center justify-center p-4">{children}</View>
);

export default Surface;
