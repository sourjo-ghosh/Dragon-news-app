import { Button } from "@heroui/react";
import Category from "../components/homePage/Category";
import LoginSection from "../components/homePage/LoginSection";

const getALlCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};
const getNewsByCategory = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  const data = await res.json();
  return data.data;
};
export default async function Home() {
  const news = await getNewsByCategory("03")
  console.log("news data", news)
  const categoriesData = await getALlCategory();
  const categories = categoriesData.news_category;
  return (
    <div className="grid md:grid-cols-9 lg:grid-cols-12 gap-4 my-10 w-11/12 mx-auto">
      <div className="col-span-4 md:grid-cols-1 lg:grid-cols-3">
        <h1 className="text-xl font-bold">All Category</h1>
        <Category categories={categories} activeId={"01"} />
      </div>
      <div className="col-span-4 md:grid-cols-4 lg:grid-cols-6">
        <h1 className="text-xl font-bold">Dragon News Home</h1>
      </div>
      <div className="col-span-4 md:grid-cols-1 lg:grid-cols-3">
          <h1 className="text-xl font-bold">Login In</h1>
          <LoginSection/>
      </div>
    </div>
  );
}
