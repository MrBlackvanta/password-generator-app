import { CheckIcon } from "./icons";

type OptionCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function OptionCheckbox({
  label,
  checked,
  onChange,
}: OptionCheckboxProps) {
  return (
    <label className="group flex cursor-pointer items-start gap-5 md:gap-6">
      <span className="relative grid size-5 shrink-0 place-items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="peer absolute inset-0 size-5 appearance-none border-2 border-ink v-focus-ring transition-colors group-hover:border-accent checked:border-0 checked:bg-accent motion-reduce:transition-none"
        />
        <CheckIcon className="pointer-events-none invisible h-3 w-3.5 text-well peer-checked:visible" />
      </span>
      <span className="text-body-sm md:text-body">{label}</span>
    </label>
  );
}
