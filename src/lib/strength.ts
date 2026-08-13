import { CHARACTER_SETS } from "./password";

export const STRENGTH_LEVELS = [
  "too-weak",
  "weak",
  "medium",
  "strong",
] as const;

export type StrengthLevel = (typeof STRENGTH_LEVELS)[number];

export const STRENGTH_LABELS: Record<StrengthLevel, string> = {
  "too-weak": "TOO WEAK!",
  weak: "WEAK",
  medium: "MEDIUM",
  strong: "STRONG",
};

const ENTROPY_THRESHOLDS = [30, 50, 70];

export function strengthOf(password: string): StrengthLevel | null {
  if (!password) return null;

  const poolSize = Object.values(CHARACTER_SETS)
    .filter((set) => [...password].some((character) => set.includes(character)))
    .reduce((total, set) => total + set.length, 0);
  const bits = password.length * Math.log2(poolSize);

  return STRENGTH_LEVELS[
    ENTROPY_THRESHOLDS.filter((bar) => bits >= bar).length
  ];
}
