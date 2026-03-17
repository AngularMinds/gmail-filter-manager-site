import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gmail Filter Manager — Create Gmail Filters in One Click",
  description:
    "Stop digging through Gmail settings. Select emails directly in your inbox, pick an action, and create permanent filters in one click. Free, open-source Chrome extension with zero data collection.",
  keywords: [
    "Gmail filter",
    "Gmail filter manager",
    "Chrome extension",
    "email filter",
    "Gmail automation",
    "bulk email filter",
    "block sender Gmail",
    "unsubscribe Gmail",
    "Gmail inbox cleanup",
    "email management",
    "Gmail productivity",
    "create Gmail filter",
    "one click Gmail filter",
  ],
  authors: [{ name: "Gmail Filter Manager" }],
  creator: "Gmail Filter Manager",
  metadataBase: new URL("https://gmailfiltermanager.com"),
  alternates: {
    canonical: "https://gmailfiltermanager.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gmailfiltermanager.com",
    siteName: "Gmail Filter Manager",
    title: "Gmail Filter Manager — Create Gmail Filters in One Click",
    description:
      "Select emails directly in your inbox, pick an action, and create permanent Gmail filters in one click. Free, open-source, and private.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gmail Filter Manager — Create Gmail Filters in One Click",
    description:
      "Select emails directly in your inbox, pick an action, and create permanent Gmail filters in one click. Free, open-source, and private.",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Inline script to prevent flash of wrong theme
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`;

function Header() {
  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#privacy", label: "Your Data" },
    { href: "/#faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Gmail Filter Manager logo" width={28} height={28} />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Gmail Filter Manager
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="https://github.com/AngularMinds/gmail-filter-manager"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-border-light hover:text-foreground sm:flex"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="Gmail Filter Manager logo" width={28} height={28} />
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Gmail Filter Manager
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Create Gmail filters directly from your inbox. Free, open-source,
              and completely private. No data ever leaves your browser.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#privacy"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Your Data
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Project</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/AngularMinds/gmail-filter-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://chromewebstore.google.com/detail/gmail-filter-manager/pnpogikkobfnlbhfmjbiidglkaafjhel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <svg
                    width="14"
                    height="14"
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
                  Chrome Web Store
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AngularMinds/gmail-filter-manager/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted/60">
              &copy; {new Date().getFullYear()} Gmail Filter Manager. Open-source under the MIT License.
            </p>
            <p className="max-w-md text-center text-xs text-muted/40 sm:text-right">
              Gmail Filter Manager runs entirely in your browser. No servers, no
              analytics, no tracking. Your email data never leaves your machine.
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-muted/40">
            Gmail is a registered trademark of Google LLC. Gmail Filter Manager is not affiliated with, endorsed by, or sponsored by Google.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
