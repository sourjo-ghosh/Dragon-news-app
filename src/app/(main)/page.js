import { Button } from "@heroui/react";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button className="text-2xl p-4 bg-red-400 text-blue-500">Click Me</Button>
    </div>
  );
}
