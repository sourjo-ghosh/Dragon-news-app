import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Fire Breaks Out in Downtown Area",
  },
  {
    _id: "2",
    title: "Breaking News: Government Announces New Education Policy",
  },
  {
    _id: "3",
    title: "Breaking News: National Team Wins International Championship",
  },
  {
    _id: "4",
    title: "Breaking News: Tech Company Launches Revolutionary AI Product",
  },
  {
    _id: "5",
    title: "Breaking News: Heavy Rainfall Causes Flooding in Several Regions",
  },
  {
    _id: "6",
    title: "Breaking News: Stock Market Hits Record High This Week",
  },
  {
    _id: "7",
    title: "Breaking News: New Metro Rail Service Opens to Public",
  },
  {
    _id: "8",
    title: "Breaking News: Scientists Discover Potential Cancer Treatment",
  },
  {
    _id: "9",
    title: "Breaking News: Fuel Prices Reduced After Global Market Shift",
  },
  {
    _id: "10",
    title: "Breaking News: Major Cybersecurity Breach Affects Thousands",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center gap-5 w-11/12 mx-auto bg-gray-100 dark:bg-zinc-800 p-3 rounded-sm">
      <Button className="rounded-none bg-[#D72050] text-[#ffffff]">
        Latest News
      </Button>
      <Marquee pauseOnHover={true} className="text-black dark:text-white">
        {news.map((n) => {
          return <span key={n._id}>{n.title}</span>;
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
