import { redirect } from "next/navigation";

const default_category = "01";
export default async function Home() {
  redirect(`category/${default_category}`);
}
