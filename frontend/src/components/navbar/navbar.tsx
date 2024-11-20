"use client";

import { headerRoutes } from "$lib/header-routes";
import { IHeaderRoutes } from "$lib/types";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const routeName = usePathname();
  return (
    <header className="sticky top-0 z-[999] flex h-24 w-full items-center justify-center bg-white shadow-sm shadow-gray-400">
      <div className="flex w-full items-center justify-between px-8 py-[1.6rem] lg:px-10 lg:py-8">
        <Link href="/">
          <Image
            src="/microphone.gif"
            alt="mic-logo"
            height="40"
            width="40"
            className="rounded-full"
            unoptimized
          />
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          {headerRoutes.map((route: IHeaderRoutes, index: number) => (
            <Link
              key={index}
              href={route.href}
              className={cn(
                routeName === route.href
                  ? "font-bold text-blue-500"
                  : "text-black",
              )}
            >
              {route.routeName}
            </Link>
          ))}
          {/* <button className="cursor-pointer rounded-md border-2 border-white bg-blue-500 px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-transparent hover:text-black "> */}
          {/*   Login */}
          {/* </button> */}
        </div>
      </div>
    </header>
  );
};
