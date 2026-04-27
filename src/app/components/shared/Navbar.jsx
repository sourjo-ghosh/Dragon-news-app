"use client";
import { Switch, Toast } from "@heroui/react";
import { Button, Spinner } from "@heroui/react";
import person from "@/assets/user.png";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@gravity-ui/icons";
const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center my-3">
      <ul className="flex justify-center items-center gap-5 md:flex-2 lg:flex-2">
        <li className="text-[16px] text-gray-600 dark:text-gray-400">
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li className="text-[16px] text-gray-600 dark:text-gray-400">
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li className="text-[18px] text-gray-600 dark:text-gray-400">
          <NavLink href={"/career"}>career</NavLink>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-4">
        {isPending ? (
          <Spinner size="lg" />
        ) : session ? (
        <div className="flex justify-between items-center gap-2">
            <h2 className="hidden md:flex lg:flex text-black dark:text-white">
              Hello, {user?.name}
            </h2>
            <Image
              src={user?.image || person}
              alt={user?.name}
              width={35}
              height={35}
              className="rounded-full"
            ></Image>
            <Button
              onClick={() => authClient.signOut()}
              className="rounded-none bg-[#403F3F] text-white"
            >
              Log out
            </Button>
          </div>
        ) : (
          <div className="flex justify-between items-center gap-4">
            <Image
              src={person}
              alt="person avatar"
              width={35}
              height={35}
              className="bg-none"
            ></Image>
            <Link href="/login">
              <Button className="rounded-none bg-[#403F3F] text-white">
                Login
              </Button>
            </Link>
          </div>
        )}
        <Switch onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {({ isSelected }) => (
            <>
              <Switch.Control
                className={`h-[31px] w-[51px] ${isSelected ? "bg-gray-400" : "bg-[#403F3F]"}`}
              >
                <Switch.Thumb
                  className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
                >
                  <Switch.Icon>
                    {isSelected ? (
                      <Sun className="size-4 text-[#D72050]" />
                    ) : (
                      <Moon className="size-4 text-black" />
                    )}
                  </Switch.Icon>
                </Switch.Thumb>
              </Switch.Control>
            </>
          )}
        </Switch>
      </div>
    </div>
  );
};

export default Navbar;
