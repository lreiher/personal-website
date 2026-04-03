import type { Metadata } from "next";
import { CustomMDX } from "app/components/mdx";
import { readMDXFile } from "app/utils";

const policyFile = "app/savanna/privacy/privacy-policy.mdx";
const { metadata: policyMetadata, content } = readMDXFile(policyFile);

export const metadata: Metadata = {
  title: policyMetadata.title || "Privacy Policy - Savanna",
  description:
    policyMetadata.summary || "Privacy policy for Savanna: Safari Wildlife Tracker.",
  alternates: {
    canonical: "/savanna/privacy",
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

export default function SavannaPrivacyPage() {
  return (
    <section>
      <article className="prose max-w-none">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}
