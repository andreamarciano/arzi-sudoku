import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";
import "@assets/styles/global.css";
import Logo from "@assets/img/arzi-logo.jpg";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/main");
    }, 1500);
    return () => clearTimeout(timer);
  });

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        source={Logo}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
    </View>
  );
}
