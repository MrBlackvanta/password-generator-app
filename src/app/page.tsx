const swatches = [
  "bg-page-top",
  "bg-page-bottom",
  "bg-surface",
  "bg-well",
  "bg-ink",
  "bg-ink-muted",
  "bg-ink-placeholder",
  "bg-accent",
  "bg-strength-too-weak",
  "bg-strength-weak",
  "bg-strength-medium",
  "bg-strength-strong",
];

const sizes = ["text-heading-lg", "text-heading", "text-body", "text-body-sm"];

export default function Home() {
  return (
    <main className="flex-1 p-8">
      <h1 className="text-heading">Token probe</h1>
      <ul>
        {swatches.map((swatch) => (
          <li key={swatch} id={swatch} className={`${swatch} h-4 w-40`} />
        ))}
      </ul>
      <ul>
        {sizes.map((size) => (
          <li key={size} id={size} className={size}>
            Wg
          </li>
        ))}
      </ul>
      <p id="natural" className="text-body-sm" style={{ lineHeight: "normal" }}>
        Wg
      </p>
      <button id="ring" className="v-focus-ring">
        focus me
      </button>
    </main>
  );
}
