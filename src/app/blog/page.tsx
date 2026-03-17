import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Gmail Filter Manager",
  description:
    "Tips, guides, and strategies for managing your Gmail inbox. Learn how to create filters, bulk delete emails, reach inbox zero, and boost your email productivity.",
  alternates: {
    canonical: "https://gmailfiltermanager.com/blog",
  },
  openGraph: {
    title: "Blog — Gmail Filter Manager",
    description:
      "Tips, guides, and strategies for managing your Gmail inbox. Learn how to create filters, bulk delete emails, reach inbox zero, and boost your email productivity.",
    url: "https://gmailfiltermanager.com/blog",
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-muted">
          Guides and strategies for a cleaner Gmail inbox.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-accent/40 hover:bg-surface-light"
          >
            <div className="mb-3 flex items-center gap-3 text-sm text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="h-1 w-1 rounded-full bg-border-light" />
              <span>{post.readingTime}</span>
            </div>
            <h2 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent-light">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-light opacity-0 transition-opacity group-hover:opacity-100">
              Read article
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
