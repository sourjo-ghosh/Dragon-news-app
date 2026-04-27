import { Button } from "@heroui/react";
import Link from "next/link";

const Category = ({ categories, activeId }) => {
  return (
    <div>
      
      <ul className="my-5 flex flex-col justify-center items-start gap-3">
        {categories.map((category) => {
          return (
            <li
              className={`${activeId === category.category_id ? "text-black dark:text-white bg-gray-200 dark:bg-zinc-800 font-bold" : "text-gray-600 dark:text-gray-400"} rounded-[3px] p-1 w-50`}
              key={category.category_id}
            >
              <Link href={`/category/${category.category_id}`} className="block">{category.category_name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
