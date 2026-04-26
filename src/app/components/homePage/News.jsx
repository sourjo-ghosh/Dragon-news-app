import Image from "next/image";
import { Eye } from "@gravity-ui/icons";
import { Bookmark } from "@gravity-ui/icons";
import { ArrowShapeTurnUpRight } from "@gravity-ui/icons";
import Link from "next/link";
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const trimDetails = (details) => {
  if (!details) return "";
  if (details.length <= 170) return details;
  return `${details.slice(0, 100)}...`;
};

const News = ({ item }) => {
  const { title, image_url, details, author, rating, total_view } = item;

  return (
    <article className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src={image_url}
            alt={author?.name || "Author"}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {author?.name || "Unknown Author"}
            </p>
            <p className="text-xs text-gray-500">
              {formatDate(author?.published_date)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <button type="button" aria-label="Bookmark">
            <Bookmark></Bookmark>
          </button>
          <button type="button" aria-label="Share">
            <ArrowShapeTurnUpRight></ArrowShapeTurnUpRight>
          </button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="mb-4 text-3xl font-bold leading-snug text-gray-800">
          {title}
        </h2>

        <Image
          src={image_url}
          alt={title}
          width={900}
          height={520}
          className="mb-4 h-auto w-full rounded-md object-cover"
        />

        <p className="text-lg leading-8 text-gray-600">
          <p className="line-clamp-2">
            {details}
          </p>
          <span className="cursor-pointer font-semibold text-orange-500">
            <Link href={`/news/${item._id}`}>See Details</Link>
          </span>
        </p>
      </div>

      <div className="mx-4 mb-4 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-xl tracking-wide text-orange-500">★★★★★</span>
            <span className="text-lg">{rating?.number ?? 0}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye></Eye>
            <span className="text-lg">{total_view ?? 0}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default News;
