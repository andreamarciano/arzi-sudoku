import { View } from "react-native";
import { useTheme } from "src/contexts/GlobalContext";
import { theme, ThemeKey } from "@assets/styles/theme";

type ThemedViewProps = {
  variant?: ThemeKey;
  className?: string;
  children?: React.ReactNode;
};

export default function ThemedView({
  variant = "background",
  className = "",
  children,
}: ThemedViewProps) {
  const { theme: currentTheme } = useTheme();
  const colors = theme[currentTheme];

  return <View className={`${colors[variant]} ${className}`}>{children}</View>;
}
