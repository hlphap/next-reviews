import Link from "next/link";

import Heading from "@/components/Heading";
import { getReviews } from "@/libs/reviews";

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>This is reviews page</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map(({ slug, title, image }) => (
          <li
            key={title}
            className="border w-80 bg-white rounded shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${slug}`}>
              <img
                src={image}
                alt={title}
                width={320}
                height={180}
                className="mb-2 rounded-t"
              />
              <h2 className="py-1 text-center font-semibold font-orbitron">
                {title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
