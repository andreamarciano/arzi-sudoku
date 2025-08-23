import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const difficulties = ["easy", "medium", "hard", "evil"];

export default function MainPage() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-3xl font-bold mb-6">Sudoku</Text>

      {difficulties.map((diff) => (
        <TouchableOpacity
          key={diff}
          className="bg-blue-500 px-6 py-3 rounded-xl mb-3"
          onPress={() => router.push(`/main/${diff}`)}
        >
          <Text className="text-white text-lg capitalize">{diff}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
