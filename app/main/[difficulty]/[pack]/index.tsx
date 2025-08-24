import { useLocalSearchParams } from "expo-router";
import NavButton from "@components/buttons/NavButton";
import Surface from "@components/layouts/Surface";

const puzzles = [
  "Puzzle 01",
  "Puzzle 02",
  "Puzzle 03",
  "Puzzle 04",
  "Puzzle 05",
];

export default function PackPage() {
  const { difficulty, pack } = useLocalSearchParams();

  return (
    <Surface>
      <Surface.Header title={`Select Puzzle - ${difficulty} - ${pack}`} />
      <Surface.Body>
        {puzzles.map((puzzle) => (
          <NavButton
            key={puzzle}
            label={puzzle}
            path={`/main/${difficulty}/${pack}/${puzzle.toLowerCase().replace(" ", "")}`}
            color="tertiary"
          />
        ))}
      </Surface.Body>
    </Surface>
  );
}
