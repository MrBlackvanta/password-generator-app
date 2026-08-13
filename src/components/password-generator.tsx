"use client";

import { CharacterSetId, generatePassword, strengthOf } from "@/lib";
import { useState, type SubmitEvent } from "react";
import { ArrowRightIcon } from "./icons";
import LengthSlider from "./length-slider";
import OptionCheckbox from "./option-checkbox";
import PasswordField from "./password-field";
import StrengthMeter from "./strength-meter";

const INITIAL_LENGTH = 10;
const INITIAL_SETS: CharacterSetId[] = ["uppercase", "lowercase", "numbers"];

const OPTIONS: { id: CharacterSetId; label: string }[] = [
  { id: "uppercase", label: "Include Uppercase Letters" },
  { id: "lowercase", label: "Include Lowercase Letters" },
  { id: "numbers", label: "Include Numbers" },
  { id: "symbols", label: "Include Symbols" },
];

export default function PasswordGenerator() {
  const [length, setLength] = useState(INITIAL_LENGTH);
  const [sets, setSets] = useState<CharacterSetId[]>(INITIAL_SETS);
  const [password, setPassword] = useState("");

  function toggleSet(id: CharacterSetId, include: boolean) {
    setSets((current) =>
      include ? [...current, id] : current.filter((set) => set !== id),
    );
  }

  function generate(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setPassword(generatePassword(length, sets));
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <PasswordField password={password} />

      <form
        onSubmit={generate}
        className="flex flex-col gap-8 bg-surface p-4 md:px-8 md:pt-6 md:pb-8"
      >
        <LengthSlider length={length} onChange={setLength} />

        <fieldset className="flex flex-col gap-4 md:gap-4.75">
          <legend className="sr-only">Include characters</legend>
          {OPTIONS.map(({ id, label }) => (
            <OptionCheckbox
              key={id}
              label={label}
              checked={sets.includes(id)}
              onChange={(include) => toggleSet(id, include)}
            />
          ))}
        </fieldset>

        <div className="flex flex-col gap-4 md:gap-8">
          <StrengthMeter level={strengthOf(password)} />

          <button
            type="submit"
            className="v-btn"
            disabled={length === 0 || sets.length === 0}
          >
            GENERATE
            <ArrowRightIcon className="size-3" />
          </button>
        </div>
      </form>
    </div>
  );
}
