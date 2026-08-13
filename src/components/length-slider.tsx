import type { CSSProperties } from "react";

export const MAX_LENGTH = 20;

type LengthSliderProps = {
  length: number;
  onChange: (length: number) => void;
};

export default function LengthSlider({ length, onChange }: LengthSliderProps) {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className="flex items-center justify-between">
        <label htmlFor="length" className="text-body-sm md:text-body">
          Character Length
        </label>
        <span
          className="text-heading text-accent md:text-heading-lg"
          aria-hidden="true"
        >
          {length}
        </span>
      </div>

      <input
        type="range"
        id="length"
        min={0}
        max={MAX_LENGTH}
        value={length}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-valuetext={`${length} character${length === 1 ? "" : "s"}`}
        className="v-slider"
        style={{ "--fill": `${(length / MAX_LENGTH) * 100}%` } as CSSProperties}
      />
    </div>
  );
}
