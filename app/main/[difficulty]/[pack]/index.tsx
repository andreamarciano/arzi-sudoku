import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const puzzles = ["Puzzle 01", "Puzzle 02", "Puzzle 03"];

export default function PackPage() {
  const { difficulty, pack } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-xl font-bold mb-6">
        Select Puzzle - {difficulty} - {pack}
      </Text>

      {puzzles.map((puzzle) => (
        <TouchableOpacity
          key={puzzle}
          className="bg-purple-500 px-6 py-3 rounded-xl mb-3"
          onPress={() =>
            router.push(
              `/main/${difficulty}/${pack}/${puzzle.toLowerCase().replace(" ", "")}`
            )
          }
        >
          <Text className="text-white text-lg">{puzzle}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
