import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import {
  sizeMap,
  SizeKey,
  ColorKey,
  useThemedColors,
} from "@assets/styles/buttons";

type NavButtonProps = {
  label: string;
  path: string;
  color?: ColorKey;
  size?: SizeKey;
};

export default function NavButton({
  label,
  path,
  color = "primary",
  size = "md",
}: NavButtonProps) {
  const router = useRouter();
  const colors = useThemedColors();

  return (
    <TouchableOpacity
      className={`${colors[color]} rounded-xl mb-3 ${sizeMap[size]} items-center`}
      onPress={() => router.push(path)}
    >
      <Text className="text-white text-lg capitalize">{label}</Text>
    </TouchableOpacity>
  );
}
