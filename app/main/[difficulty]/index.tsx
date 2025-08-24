import { useLocalSearchParams } from "expo-router";
import NavButton from "@components/buttons/NavButton";
import Surface from "@components/layouts/Surface";

const packs = ["Pack 01", "Pack 02", "Pack 03", "Pack 04", "Pack 05"];

export default function DifficultyPage() {
  const { difficulty } = useLocalSearchParams();

  return (
    <Surface>
      <Surface.Header title={`Select Pack - ${difficulty}`} />
      <Surface.Body>
        {packs.map((pack) => (
          <NavButton
            key={pack}
            label={pack}
            path={`/main/${difficulty}/${pack.toLowerCase().replace(" ", "")}`}
            color="secondary"
          />
        ))}
      </Surface.Body>
    </Surface>
  );
}
