import NavButton from "@components/buttons/NavButton";
import Surface from "@components/layouts/Surface";

const difficulties = ["easy", "medium", "hard", "evil"];

export default function MainPage() {
  return (
    <Surface>
      <Surface.Header title="Sudoku" />
      <Surface.Body>
        {difficulties.map((diff) => (
          <NavButton key={diff} label={diff} path={`/main/${diff}`} />
        ))}
      </Surface.Body>
    </Surface>
  );
}
