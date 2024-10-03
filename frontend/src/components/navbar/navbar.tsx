import { headerRoutes } from "$lib/utils/header-routes";
import { IHeaderRoutes } from "$lib/utils/types";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="bg-white z-[999] sticky top-0 h-[6rem] w-full flex items-center justify-center shadow-sm shadow-gray-400">
      <div className="w-full flex justify-between items-center px-8 py-[1.6rem] lg:px-10 lg:py-8">
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
            <Link key={index} href={route.href}>
              {route.routeName}
            </Link>
          ))}
          <button className="font-bold border-2 border-white rounded-md bg-blue-500 text-white px-4 py-2 cursor-pointer transition-all ease-in-out duration-300 hover:border-blue-500 hover:text-black hover:bg-transparent">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
