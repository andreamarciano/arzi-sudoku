import { theme } from "./theme";
import { useTheme } from "src/contexts/GlobalContext";

export const sizeMap = {
  sm: "px-3 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

export type SizeKey = keyof typeof sizeMap;
export type ColorKey = "primary" | "secondary" | "tertiary";

export function useThemedColors() {
  const { theme: currentTheme } = useTheme();
  return theme[currentTheme];
}
