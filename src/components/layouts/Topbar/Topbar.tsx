import { View, Text, TouchableOpacity } from "react-native";
import { Menu } from "lucide-react-native";

type TopbarProps = {
  title: string;
  onMenuPress?: () => void;
};

export default function Topbar({ title, onMenuPress }: TopbarProps) {
  return (
    <View className="w-full h-14 bg-blue-500 flex-row items-center px-4">
      <TouchableOpacity onPress={onMenuPress} className="mr-4">
        <Menu color="white" size={24} />
      </TouchableOpacity>

      <Text className="text-white text-lg font-bold">{title}</Text>
    </View>
  );
}
