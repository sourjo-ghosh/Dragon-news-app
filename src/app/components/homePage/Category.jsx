import { Button } from "@heroui/react";
import Link from "next/link";

const Category = ({ categories, activeId }) => {
  return (
    <div>
      
      <ul className="my-5 flex flex-col justify-center items-start gap-3">
        {categories.map((category) => {
          return (
            <li
              className={`${activeId === category.category_id ? "text-[#403F3F] bg-[#E7E7E7] font-bold" : "text-[#9F9F9F]"} rounded-[3px] p-1  w-50`}
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
