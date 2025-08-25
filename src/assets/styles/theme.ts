export const theme = {
  light: {
    background: "bg-gray-100",
    surface: "bg-white",
    text: "text-black",
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    tertiary: "bg-purple-500",
  },
  dark: {
    background: "bg-gray-900",
    surface: "bg-gray-800",
    text: "text-white",
    primary: "bg-blue-400",
    secondary: "bg-gray-400",
    tertiary: "bg-purple-400",
  },
} as const;

export type ThemeKey = keyof typeof theme.light;
