import { useEffect, useState } from "react";
import { CopyIcon } from "./icons";

const PLACEHOLDER = "P4$5W0rD!";
const COPIED_NOTICE_MS = 2000;

const ANNOUNCEMENTS = {
  idle: "",
  copied: "Password copied to clipboard",
  failed: "Could not copy to clipboard",
};

type CopyStatus = keyof typeof ANNOUNCEMENTS;

export default function PasswordField({ password }: { password: string }) {
  const [copyResult, setCopyResult] = useState<{
    status: CopyStatus;
    password: string;
  }>({ status: "idle", password: "" });

  const status = copyResult.password === password ? copyResult.status : "idle";
  const copied = status === "copied";

  useEffect(() => {
    if (copyResult.status === "idle") return;
    const timer = setTimeout(
      () => setCopyResult({ status: "idle", password: "" }),
      COPIED_NOTICE_MS,
    );
    return () => clearTimeout(timer);
  }, [copyResult]);

  async function copy() {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopyResult({ status: "copied", password });
    } catch {
      setCopyResult({ status: "failed", password });
    }
  }

  return (
    <div className="flex min-h-16 items-center gap-4 bg-surface px-4 md:min-h-20 md:px-8">
      <output className="flex-1 text-heading break-all md:text-heading-lg">
        {password || (
          <>
            <span className="text-ink-placeholder" aria-hidden="true">
              {PLACEHOLDER}
            </span>
            <span className="sr-only">No password generated yet</span>
          </>
        )}
      </output>

      {copied && (
        <span
          className="text-body-sm text-accent md:text-body"
          aria-hidden="true"
        >
          COPIED
        </span>
      )}

      <button
        type="button"
        onClick={copy}
        aria-label="Copy password to clipboard"
        className="v-tap-target text-accent v-focus-ring transition-colors hover:text-white motion-reduce:transition-none"
      >
        <CopyIcon className="h-5 w-auto md:h-6" />
      </button>

      <span className="sr-only" aria-live="polite">
        {ANNOUNCEMENTS[status]}
      </span>
    </div>
  );
}
