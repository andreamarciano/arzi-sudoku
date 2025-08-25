import NavButton from "@components/buttons/NavButton";
import Surface from "@components/layouts/Surface";
import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "src/contexts/GlobalContext";

const difficulties = ["easy", "medium", "hard", "evil"];

export default function MainPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Surface>
      <Surface.Header
        title="Sudoku"
        right={
          <TouchableOpacity onPress={toggleTheme}>
            <Text>{theme === "light" ? "🌙" : "☀️"}</Text>
          </TouchableOpacity>
        }
      />
      <Surface.Body>
        {difficulties.map((diff) => (
          <NavButton key={diff} label={diff} path={`/main/${diff}`} />
        ))}
      </Surface.Body>
    </Surface>
  );
}
