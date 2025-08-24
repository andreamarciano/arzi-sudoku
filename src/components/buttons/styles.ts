export const colorMap = {
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
  tertiary: "bg-purple-500",
} as const;

export const sizeMap = {
  sm: "px-3 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

export type ColorKey = keyof typeof colorMap;
export type SizeKey = keyof typeof sizeMap;
