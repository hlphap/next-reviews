import Link from "next/link";

import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>This is reviews page</Heading>
      <ul className="flex flex-col gap-3">
        <li className="border w-80 bg-white rounded shadow hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt="Hollow Knight"
              width={320}
              height={180}
              className="mb-2 rounded-t"
            />
            <h2 className="py-1 text-center">Hollow knight</h2>
          </Link>
        </li>
        <li className="border w-80 bg-white rounded shadow hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt="Stardew valley"
              width={320}
              height={180}
              className="mb-2 rounded-t"
            />
            <h2 className="py-1 text-center">Stardew valley</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
