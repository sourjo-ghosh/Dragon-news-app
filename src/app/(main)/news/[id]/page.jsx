import LoginSection from "@/app/components/homePage/LoginSection";
import Image from "next/image";
import Link from "next/link";

const formatDate = (dateString) => {
  if (!dateString) return "Date unavailable";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "Date unavailable";

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const NewsData = await res.json();

  const NewsTitle = NewsData?.data[0].title;
  const NewsDescription = NewsData?.data[0].details;
  return {
    title: NewsTitle,
    description: NewsDescription,
  };
};
const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const newsData = await res.json();
  const data = newsData.data[0];
  const categoryId = data?.category_id || "01";

  return (
    <div className="mx-auto my-10 grid w-11/12 grid-cols-1 gap-6 md:grid-cols-12">
      <div className="md:col-span-9">
        <h1 className="mb-5 text-xl font-bold text-black dark:text-white">Dragon News</h1>
        <div className="overflow-hidden rounded border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 md:p-6">
          <Image
            src={data?.image_url}
            alt={data?.title || "News cover"}
            width={900}
            height={460}
            className="mb-5 h-auto w-full rounded object-cover"
          />

          <h2 className="mb-3 text-2xl font-bold leading-tight text-black dark:text-white">
            {data?.title}
          </h2>

          <p className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
            {formatDate(data?.author?.published_date)} | Tag Cloud Tags:{" "}
            {data?.author?.name || "Unknown"}
          </p>

          <p className="text-base leading-8 text-gray-600 dark:text-gray-400">{data?.details}</p>

          <Link
            href={`/category/${categoryId}`}
            className="mt-7 inline-flex items-center rounded bg-[#D72050] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b61a42]"
          >
            ← All news in this category
          </Link>
        </div>
      </div>

      <div className="md:col-span-3">
        <h1 className="mb-4 text-xl font-bold text-black dark:text-white">Login In</h1>
        <LoginSection />
      </div>
    </div>
  );
};

export default NewsDetailsPage;
