import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Savanna",
  description: "Support contact for Savanna: Safari Wildlife Tracker.",
  alternates: {
    canonical: "/savanna/support",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function SavannaSupportPage() {
  return (
    <section className="my-8">
      <h1 className="mb-4 text-4xl font-medium tracking-tight">
        Savanna Support
      </h1>
      <p className="my-4 text-neutral-800 dark:text-neutral-200">
        Need help with Savanna? Reach out by email.
      </p>
      <a
        className="underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 transition-all dark:decoration-neutral-600"
        href="mailto:info@lennartreiher.de?subject=Savanna%20Support"
      >
        info@lennartreiher.de
      </a>
    </section>
  );
}
