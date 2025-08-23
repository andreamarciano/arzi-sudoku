import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const packs = ["Pack 01", "Pack 02", "Pack 03", "Pack 04", "Pack 05"];

export default function DifficultyPage() {
  const { difficulty } = useLocalSearchParams(); // legge il parametro dinamico
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold mb-6">
        Select Pack - {difficulty}
      </Text>

      {packs.map((pack) => (
        <TouchableOpacity
          key={pack}
          className="bg-green-500 px-6 py-3 rounded-xl mb-3"
          onPress={() =>
            router.push(
              `/main/${difficulty}/${pack.toLowerCase().replace(" ", "")}`
            )
          }
        >
          <Text className="text-white text-lg">{pack}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
