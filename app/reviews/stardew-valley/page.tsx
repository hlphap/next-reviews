import { marked } from "marked";

import { readFile } from "node:fs/promises";

import Heading from "@/components/Heading";

export default async function StardewValleyPage() {
  const text = await readFile("./contents/reviews/stardew-valley.md", "utf-8");
  const html = marked(text, { headerIds: false, mangle: false });

  return (
    <>
      <Heading>Stardew Valley</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt="Stgardew Valley"
        width={640}
        height={360}
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="max-w-sm prose prose-slate"
      />
    </>
  );
}
