import Category from "@/app/components/homePage/Category";
import News from "@/app/components/homePage/News";
import LoginSection from "@/app/components/homePage/LoginSection";


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
const NewsCategoryPage = async ({params}) => {
    const {id} = await params
    console.log(id)
    const news = await getNewsByCategory(id);
  const categoriesData = await getALlCategory();
  const categories = categoriesData.news_category;
  return (
    <div className="mx-auto my-10 grid w-11/12 grid-cols-1 gap-6 md:grid-cols-12">
      <div className="md:col-span-3">
        <h1 className="mb-4 text-xl font-bold">All Category</h1>
        <Category categories={categories} activeId={id} />
      </div>
      <div className="md:col-span-6">
        <h1 className="mb-4 text-xl font-bold">Dragon News Home</h1>
        <div className="space-y-6">
          {news.length > 0 ? news?.map((item) => (
            <News key={item._id} item={item} />
          )): <h2 className="text-2xl font-bold my-7">No News found!</h2>}
        </div>
      </div>
      <div className="md:col-span-3">
        <h1 className="mb-4 text-xl font-bold">Login In</h1>
        <LoginSection />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
