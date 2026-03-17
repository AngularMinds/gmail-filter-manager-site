import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Gmail Filter Manager`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://gmailfiltermanager.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://gmailfiltermanager.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
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
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to blog
      </Link>

      <header className="mb-12">
        <div className="mb-4 flex items-center gap-3 text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="h-1 w-1 rounded-full bg-border-light" />
          <span>{post.readingTime}</span>
        </div>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
      </header>

      <article
        className="prose-custom"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 to-accent-light/5 p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground">
          Tired of creating Gmail filters the hard way?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted">
          Gmail Filter Manager lets you select emails right in your inbox and
          create permanent filters in one click. Free, open-source, and
          completely private.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
        >
          Learn more
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
        </Link>
      </div>
    </div>
  );
}
