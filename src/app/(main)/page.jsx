// import Category from "../components/homePage/Category";
// import LoginSection from "../components/homePage/LoginSection";
// import News from "../components/homePage/News";

import { redirect } from "next/navigation";

// const getALlCategory = async () => {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/news/categories",
//   );
//   const data = await res.json();
//   return data.data;
// };
// const getNewsByCategory = async (id) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/category/${id}`,
//   );
//   const data = await res.json();
//   return data.data;
// };
// export default async function Home() {
//   const news = await getNewsByCategory("08");
//   const categoriesData = await getALlCategory();
//   const categories = categoriesData.news_category;

//   return (
//     <div className="mx-auto my-10 grid w-11/12 grid-cols-1 gap-6 md:grid-cols-12">
//       <div className="md:col-span-3">
//         <h1 className="mb-4 text-xl font-bold">All Category</h1>
//         <Category categories={categories} activeId={'08'}/>
//       </div>
//       <div className="md:col-span-6">
//         <h1 className="mb-4 text-xl font-bold">Dragon News Home</h1>
//         <div className="space-y-6">
//           {news?.map((item) => (
//             <News key={item._id} item={item} />
//           ))}
//         </div>
//       </div>
//       <div className="md:col-span-3">
//         <h1 className="mb-4 text-xl font-bold">Login In</h1>
//         <LoginSection />
//       </div>
//     </div>
//   );
// }


const default_category = "01"
 export default async function Home() {
redirect(`category/${default_category}`)

}