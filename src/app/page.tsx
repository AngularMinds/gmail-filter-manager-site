"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────── Icon helpers ─────────────── */

function IconFilter({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </svg>
  );
}

function IconBolt({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconGlobe({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconMerge({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  );
}

function IconRefresh({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function IconUsers({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconFolder({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconTag({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function IconEye({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconShield({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconLock({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconDatabase({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function IconEyeOff({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function IconCode({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconServer({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

function IconCheck({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconChevron({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconGitHub({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/* ─────────────── FAQ Accordion ─────────────── */

const faqItems = [
  {
    question: "What happens to my data?",
    answer:
      "Nothing leaves your browser. Gmail Filter Manager processes everything locally using the Gmail API. No data is sent to any external server, ever. The extension only communicates with googleapis.com to create and manage your filters.",
  },
  {
    question: "Does this work with Google Workspace?",
    answer:
      "Yes. Gmail Filter Manager works with both personal Gmail accounts and Google Workspace (formerly G Suite) accounts. As long as you can access Gmail in Chrome, the extension will work.",
  },
  {
    question: "Can I use multiple Gmail accounts?",
    answer:
      "Absolutely. Gmail Filter Manager supports multiple Gmail accounts. It detects which account is currently active and manages filters for that account. You can switch between accounts in Gmail and the extension follows along.",
  },
  {
    question: "What if I want to remove a filter?",
    answer:
      "Filters created by Gmail Filter Manager are standard Gmail filters. You can manage or delete them from Gmail's Settings > Filters and Blocked Addresses, just like any other filter. The extension creates native Gmail filters — there's no vendor lock-in.",
  },
  {
    question: "Does it affect emails already in my inbox?",
    answer:
      "Yes — when you create a filter, Gmail Filter Manager applies the action to matching emails that are already in your inbox. For example, if you choose to archive emails from a sender, existing emails from that sender will also be archived.",
  },
  {
    question: "Is there a limit to how many filters I can create?",
    answer:
      "Gmail has a built-in limit of 1,000 filters per account. Gmail Filter Manager includes smart filter merging to help you stay under that limit by combining filters for the same action. The extension also handles Gmail's per-filter criteria limit by splitting large filters automatically.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes, 100% free. Gmail Filter Manager is open-source under the MIT License. There are no premium tiers, no subscriptions, no ads, and no data collection. It's a community project built to solve a real problem.",
  },
  {
    question: "What's the difference between Email and Domain mode?",
    answer:
      "Email mode creates a filter for the exact email address (e.g., newsletter@company.com). Domain mode creates a wildcard filter for every address at that domain (e.g., *@company.com), so you'll filter everything from company.com regardless of which specific address sends it.",
  },
  {
    question: "Why can't I filter gmail.com or outlook.com as a domain?",
    answer:
      "Filtering common email providers like gmail.com, outlook.com, or yahoo.com at the domain level would catch legitimate emails from real people. Gmail Filter Manager blocks this to protect you from accidentally filtering important personal correspondence. You can still filter individual email addresses from these providers.",
  },
  {
    question: "How is this different from Gmail's built-in filters?",
    answer:
      "Gmail Filter Manager creates the same native Gmail filters — but without the pain. Gmail's built-in filter creation requires navigating to Settings, finding the right page, filling in a form, choosing actions, and confirming. With this extension, you just check some emails, pick an action, and click one button. It also adds bulk filtering, smart merging, and domain-level blocking that Gmail doesn't offer out of the box.",
  },
  {
    question: "What permissions does the extension need?",
    answer:
      "The extension requires access to Gmail's API (to create and manage filters), identity permissions (for OAuth authentication), and access to mail.google.com (to show the toolbar in Gmail). It does not request access to any other websites or data. All permissions are the minimum required for the extension to function.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-accent-light"
      >
        <span className="pr-4 text-base font-medium text-foreground">
          {question}
        </span>
        <span
          className={`shrink-0 text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IconChevron />
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Feature Card ─────────────── */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface-light">
      <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent-light transition-colors group-hover:bg-accent/20">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

/* ─────────────── Step Card ─────────────── */

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-light text-xl font-bold text-white shadow-lg shadow-accent/25">
        {number}
      </div>
      <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-muted">
        {description}
      </p>
    </div>
  );
}

/* ─────────────── Privacy Card ─────────────── */

function PrivacyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/30 hover:bg-surface-light">
      <div className="shrink-0 rounded-lg bg-accent/10 p-2 text-accent-light">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-sm font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}

/* ─────────────── Main Page ─────────────── */

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      {/* ────── Hero ────── */}
      <section
        id="hero"
        className="relative overflow-hidden px-6 pb-24 pt-10 sm:pt-14 lg:pt-20"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-3 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Quick Filtering for Gmail
          </h1>

          <p className="mx-auto mb-10 text-xl font-medium sm:text-2xl">
            Bulk email filtering,{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              simplified
            </span>
          </p>

          <div className="mb-10 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/10">
            <Image
              src="/gmail-filter-manager.gif"
              alt="Gmail Filter Manager in action — select emails, pick an action, and create filters in one click"
              width={1200}
              height={750}
              className="w-full"
              unoptimized
            />
          </div>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Select multiple emails in Gmail, pick an action, and create a filter
            for every sender in one click. No settings pages, no repetition.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://chromewebstore.google.com/detail/gmail-filter-manager/pnpogikkobfnlbhfmjbiidglkaafjhel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-dim px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40"
            >
              Add to Chrome — It&apos;s Free
            </a>
            <a
              href="https://github.com/AngularMinds/gmail-filter-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-border-light hover:bg-surface-light"
            >
              <IconGitHub className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ────── Problem ────── */}
      <section id="problem" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Gmail Filters Are Powerful.{" "}
              <span className="text-muted">Finding Them Is Not.</span>
            </h2>
            <div className="mx-auto max-w-2xl space-y-4 text-center text-base leading-relaxed text-muted">
              <p>
                Gmail lets you create filters that automatically archive, label,
                delete, or mark emails as read. They&apos;re incredibly useful —
                if you can find them.
              </p>
              <p>
                The filter creation flow is buried behind{" "}
                <span className="text-foreground">
                  Settings &rarr; See all settings &rarr; Filters and Blocked
                  Addresses &rarr; Create a new filter
                </span>
                . That&apos;s four clicks before you even start. And there&apos;s no way
                to select multiple senders from your inbox and filter them all at
                once.
              </p>
              <p>
                You&apos;re left doing it one by one, each time navigating that same
                buried menu. It&apos;s tedious, it&apos;s slow, and it&apos;s why most people
                just give up and let their inbox pile up.
              </p>
              <p className="pt-2 text-lg font-medium text-foreground">
                Gmail Filter Manager fixes that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────── Features ────── */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything You Need.{" "}
              <span className="text-muted">Nothing You Don&apos;t.</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-muted">
              Built for one thing: making Gmail filters ridiculously easy to
              create.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<IconFilter className="h-5 w-5" />}
              title="One-Click Filter Creation"
              description="Select emails in your inbox, choose an action, and click one button. A permanent Gmail filter is created instantly. No settings pages, no forms."
            />
            <FeatureCard
              icon={<IconBolt className="h-5 w-5" />}
              title="Bulk Actions"
              description="Mark as read, archive, delete, or label — apply any action to multiple senders at once. Handle dozens of unwanted senders in seconds."
            />
            <FeatureCard
              icon={<IconGlobe className="h-5 w-5" />}
              title="Domain-Level Filtering"
              description="Block entire domains with wildcard filters (*@domain.com). Common providers like gmail.com and outlook.com are automatically blocked to protect real mail."
            />
            <FeatureCard
              icon={<IconMerge className="h-5 w-5" />}
              title="Smart Filter Merging"
              description="Automatically merges new senders into existing filters for the same action. Handles Gmail's per-filter criteria limit by splitting when needed."
            />
            <FeatureCard
              icon={<IconRefresh className="h-5 w-5" />}
              title="Applies to Existing Emails"
              description="Filters aren't just for future emails. Gmail Filter Manager applies your chosen action to matching emails already sitting in your inbox."
            />
            <FeatureCard
              icon={<IconUsers className="h-5 w-5" />}
              title="Multi-Account Support"
              description="Works seamlessly with multiple Gmail accounts. The extension detects which account is active and manages filters for that account automatically."
            />
            <FeatureCard
              icon={<IconFolder className="h-5 w-5" />}
              title="Filter Group Management"
              description="Organize your filters into logical groups. Keep your filter list clean and manageable even as it grows."
            />
            <FeatureCard
              icon={<IconTag className="h-5 w-5" />}
              title="Create Labels On-the-Fly"
              description="Need a new label for your filter? Create it right from the extension toolbar — no need to switch to Gmail settings."
            />
            <FeatureCard
              icon={<IconEye className="h-5 w-5" />}
              title="Visual Feedback"
              description="Filtered emails fade out and unbold in real time. Toast notifications confirm every action. You always know exactly what happened."
            />
          </div>
        </div>
      </section>

      {/* ────── How It Works ────── */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Three Steps.{" "}
              <span className="text-muted">That&apos;s It.</span>
            </h2>
            <p className="mx-auto max-w-lg text-base text-muted">
              No tutorials needed. If you can check a box, you can use Gmail
              Filter Manager.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
            <StepCard
              number="1"
              title="Select Emails"
              description="Check the boxes next to emails in your inbox. The Gmail Filter Manager toolbar appears automatically."
            />
            <StepCard
              number="2"
              title="Choose Your Action"
              description="Pick what you want: mark as read, archive, delete, or apply a label. Toggle between email and domain filtering."
            />
            <StepCard
              number="3"
              title='Click "Create Filter"'
              description="One click. A permanent Gmail filter is created and applied immediately — to future emails and existing ones."
            />
          </div>

          <div className="mt-16 rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
            <p className="text-base font-medium text-foreground">
              That&apos;s not a flag for later or a snooze.
            </p>
            <p className="mt-1 text-sm text-muted">
              It&apos;s a <span className="text-accent-light">permanent Gmail filter</span> — built into Gmail itself. It works whether the extension is installed or not.
            </p>
          </div>
        </div>
      </section>

      {/* ────── Privacy ────── */}
      <section id="privacy" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Emails. Your Data.{" "}
              <span className="text-muted">Your Machine. Period.</span>
            </h2>
            <p className="mx-auto max-w-lg text-base text-muted">
              We built Gmail Filter Manager with a simple rule: your data never
              leaves your browser.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PrivacyCard
              icon={<IconServer className="h-5 w-5" />}
              title="Zero servers"
              description="The extension runs entirely in your browser. There is no backend, no cloud service, no server of any kind."
            />
            <PrivacyCard
              icon={<IconShield className="h-5 w-5" />}
              title="Only talks to Google"
              description="The only network requests go to googleapis.com — Google's own API. Nothing else. No third-party services, ever."
            />
            <PrivacyCard
              icon={<IconLock className="h-5 w-5" />}
              title="Bank-grade authentication"
              description="Uses OAuth 2.0 with PKCE for authentication. Your credentials are handled by Google's own auth flow, never by us."
            />
            <PrivacyCard
              icon={<IconDatabase className="h-5 w-5" />}
              title="All data stays local"
              description="Account tokens and settings are stored in Chrome's local storage on your machine. Nothing is synced, uploaded, or shared."
            />
            <PrivacyCard
              icon={<IconEyeOff className="h-5 w-5" />}
              title="No tracking at all"
              description="No analytics, no telemetry, no tracking pixels, no usage data collection. We literally have no way to know you're using it."
            />
            <PrivacyCard
              icon={<IconCode className="h-5 w-5" />}
              title="Open source"
              description="The full source code is on GitHub. Every line is auditable. You don't have to trust us — you can verify."
            />
          </div>
        </div>
      </section>

      {/* ────── FAQ ────── */}
      <section id="faq" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Questions?{" "}
              <span className="text-muted">We&apos;ve Got Answers.</span>
            </h2>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onToggle={() =>
                  setOpenFAQ(openFAQ === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ────── Getting Started ────── */}
      <section id="getting-started" className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get Started{" "}
            <span className="text-muted">in Seconds</span>
          </h2>

          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <ol className="mx-auto max-w-sm space-y-6 text-left">
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-light text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <p className="text-base font-medium text-foreground">
                    Install the extension
                  </p>
                  <a
                    href="https://chromewebstore.google.com/detail/gmail-filter-manager/pnpogikkobfnlbhfmjbiidglkaafjhel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm text-accent-light transition-colors hover:text-accent"
                  >
                    Add to Chrome from the Web Store
                    <IconArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-light text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <p className="text-base font-medium text-foreground">
                    Open Gmail and select emails
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Check the boxes next to emails you want to filter. The toolbar appears automatically.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-light text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <p className="text-base font-medium text-foreground">
                    Pick an action and click &ldquo;Create Filter&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Done. A permanent Gmail filter is created and applied to all existing emails too.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-10">
              <a
                href="https://chromewebstore.google.com/detail/gmail-filter-manager/pnpogikkobfnlbhfmjbiidglkaafjhel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-dim px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40"
              >
                Add to Chrome — It&apos;s Free
                <IconArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
