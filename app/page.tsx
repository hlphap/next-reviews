import Link from "next/link";

import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/libs/reviews";

export default async function Homepage() {
  const { title, image, slug } = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you.</p>
      <div className="border w-80 bg-white rounded shadow hover:shadow-xl sm:w-full">
        <Link href={`/reviews/${slug}`} className="flex flex-col sm:flex-row">
          <img
            src={image}
            alt={title}
            width={320}
            height={180}
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">
            {title}
          </h2>
        </Link>
      </div>
    </>
  );
}
