import PasswordGenerator from "@/components/password-generator";

export default function Home() {
  return (
    <>
      <main className="grid flex-1 place-items-center px-4 md:px-0">
        <div className="flex w-full max-w-card flex-col gap-4 md:gap-8">
          <h1 className="text-center text-body-sm text-ink-muted md:text-heading">
            Password Generator
          </h1>
          <PasswordGenerator />
        </div>
      </main>

      <footer className="px-4 pt-4 pb-0.5 text-center text-note text-ink-muted">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="v-footer-link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="v-footer-link"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </footer>
    </>
  );
}
