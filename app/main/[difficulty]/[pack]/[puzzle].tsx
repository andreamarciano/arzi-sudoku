import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PuzzlePage() {
  const { difficulty, pack, puzzle } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold mb-4">
        {difficulty} - {pack} - {puzzle}
      </Text>
      <Text className="text-gray-500">[Sudoku grid placeholder]</Text>
    </View>
  );
}
