import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Gmail Filter Manager",
  description:
    "Gmail Filter Manager privacy policy. Learn how the extension handles your data — spoiler: it doesn't collect any.",
  alternates: {
    canonical: "https://gmailfiltermanager.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — Gmail Filter Manager",
    description:
      "Gmail Filter Manager privacy policy. Learn how the extension handles your data — spoiler: it doesn't collect any.",
    url: "https://gmailfiltermanager.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-muted">
          Last updated: March 17, 2026
        </p>
      </div>

      <div className="space-y-10 text-base leading-relaxed text-muted">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Overview
          </h2>
          <p>
            Gmail Filter Manager is a Chrome extension that helps you create
            Gmail filters directly from your inbox. It is designed with a
            strict privacy-first approach:{" "}
            <strong className="text-foreground">
              no data is collected, stored, or transmitted to any external
              server
            </strong>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Data We Collect
          </h2>
          <p>
            <strong className="text-foreground">None.</strong> Gmail Filter
            Manager does not collect, store, or transmit any personal data,
            usage data, analytics, or telemetry of any kind. We have no
            servers, no databases, and no way to receive your data even if we
            wanted to.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            How the Extension Works
          </h2>
          <p>
            Gmail Filter Manager runs entirely within your browser. When you
            create a filter, the extension communicates directly with the Gmail
            API (<code className="rounded bg-surface-light px-1.5 py-0.5 text-sm text-foreground">googleapis.com</code>)
            using your authenticated Google account. The extension acts as a
            client-side interface — all processing happens locally in your
            browser.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Authentication
          </h2>
          <p>
            The extension uses OAuth 2.0 with PKCE (Proof Key for Code
            Exchange) for authentication. Your Google credentials are handled
            entirely by Google&apos;s own authentication flow. Gmail Filter Manager
            never sees, stores, or has access to your Google password.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Local Storage
          </h2>
          <p>
            The extension stores minimal data locally in your browser using
            Chrome&apos;s built-in storage APIs. This includes:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>OAuth tokens for your authenticated Google account(s)</li>
            <li>Extension preferences and settings</li>
          </ul>
          <p className="mt-3">
            This data stays on your machine, is never synced externally, and
            is automatically removed when you uninstall the extension.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Network Requests
          </h2>
          <p>
            The only network requests made by Gmail Filter Manager are to
            Google&apos;s APIs (<code className="rounded bg-surface-light px-1.5 py-0.5 text-sm text-foreground">googleapis.com</code>)
            for the purpose of creating and managing your Gmail filters. No
            requests are made to any other third-party service, analytics
            provider, or external server.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Permissions
          </h2>
          <p>The extension requests the following Chrome permissions:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Gmail API access</strong> —
              to create, read, and manage your Gmail filters
            </li>
            <li>
              <strong className="text-foreground">Identity</strong> — for
              OAuth authentication with your Google account
            </li>
            <li>
              <strong className="text-foreground">
                Access to mail.google.com
              </strong>{" "}
              — to display the filter toolbar within the Gmail interface
            </li>
          </ul>
          <p className="mt-3">
            These are the minimum permissions required for the extension to
            function. No additional permissions are requested.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Third-Party Services
          </h2>
          <p>
            Gmail Filter Manager does not integrate with, send data to, or
            receive data from any third-party services other than Google&apos;s
            Gmail API, which is required for the extension&apos;s core
            functionality.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Children&apos;s Privacy
          </h2>
          <p>
            Gmail Filter Manager does not knowingly collect any information
            from anyone, including children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Open Source
          </h2>
          <p>
            Gmail Filter Manager is open-source software licensed under the
            MIT License. The complete source code is available on{" "}
            <a
              href="https://github.com/AngularMinds/gmail-filter-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent"
            >
              GitHub
            </a>
            . You can audit every line of code to verify these privacy claims.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Changes to This Policy
          </h2>
          <p>
            If this privacy policy is updated, the changes will be reflected
            on this page with an updated &ldquo;Last updated&rdquo; date. Since
            Gmail Filter Manager collects no data, meaningful changes to this
            policy are unlikely.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Contact
          </h2>
          <p>
            If you have questions about this privacy policy, you can open an
            issue on our{" "}
            <a
              href="https://github.com/AngularMinds/gmail-filter-manager/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent"
            >
              GitHub repository
            </a>
            .
          </p>
        </section>

        <div className="rounded-xl border border-border bg-surface p-6 text-center">
          <p className="text-sm text-muted/60">
            Gmail is a registered trademark of Google LLC. Gmail Filter Manager
            is not affiliated with, endorsed by, or sponsored by Google.
          </p>
        </div>
      </div>
    </div>
  );
}
