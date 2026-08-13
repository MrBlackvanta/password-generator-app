import {
  cn,
  STRENGTH_LABELS,
  STRENGTH_LEVELS,
  type StrengthLevel,
} from "@/lib";

const BAR_FILLS: Record<StrengthLevel, string> = {
  "too-weak": "bg-strength-too-weak",
  weak: "bg-strength-weak",
  medium: "bg-strength-medium",
  strong: "bg-strength-strong",
};

export default function StrengthMeter({
  level,
}: {
  level: StrengthLevel | null;
}) {
  const filled = level ? STRENGTH_LEVELS.indexOf(level) + 1 : 0;
  const fill = level ? BAR_FILLS[level] : "";

  return (
    <div className="flex min-h-14 items-center justify-between bg-well px-4 md:min-h-18 md:px-8">
      <span className="text-body-sm text-ink-muted md:text-body">STRENGTH</span>

      <div className="flex items-center gap-4">
        <span className="text-body md:text-heading" aria-live="polite">
          {level ? STRENGTH_LABELS[level] : ""}
        </span>

        <div className="flex gap-2" aria-hidden="true">
          {STRENGTH_LEVELS.map((step, index) => (
            <span
              key={step}
              className={cn(
                "h-7 w-2.5",
                index < filled ? fill : "border-2 border-ink",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
