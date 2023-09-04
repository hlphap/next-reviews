import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/libs/reviews";

interface IProps {
  slug: string;
}

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ReviewPage({
  params: { slug },
}: {
  params: IProps;
}) {
  const { title, date, image, body } = await getReview({
    slug,
  });
  return (
    <>
      <Heading>{title}</Heading>
      <p className="italic pb-2">{date}</p>
      <img src={image} alt={title} width={640} height={360} />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="max-w-sm prose prose-slate"
      />
    </>
  );
}
