import { testomonialList } from "$lib/testimonials";
import { ITestomonials } from "$lib/types";
import Image from "next/image";

export const Testomonials = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-20 overflow-y-auto overflow-x-hidden px-8 py-12 lg:overflow-hidden lg:px-20 lg:py-10 xl:px-40 2xl:px-32">
      <h1 className="text-[2rem] font-bold 2xl:text-[2.5rem]">Testomonials</h1>
      <div className="w-[22rem] md:w-[47rem] lg:w-[55rem] xl:w-[79rem] 2xl:w-[95rem]">
        <div className="grid gap-20 md:grid-cols-2 md:gap-8 lg:gap-12 xl:grid-cols-3 2xl:gap-14">
          {testomonialList.map((testomonial: ITestomonials, index: number) => (
            <div
              key={index}
              className="relative flex flex-col items-center gap-4 px-6 py-8 shadow-lg shadow-gray-400/60 lg:gap-6 lg:px-10 2xl:gap-8 2xl:py-16 "
            >
              <Image
                src="/testomonial-quote.png"
                alt="testomonial-quote"
                width="40"
                height="40"
                className="absolute -top-1 left-5"
              />
              <Image
                src={testomonial.icon}
                alt="testomonial-icon"
                width="80"
                height="80"
              />
              <p className="text-gray-600">{testomonial.testomonialText}</p>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[1.05rem] font-bold lg:text-lg">
                  {testomonial.userName}
                </span>
                <span className="font-bold text-blue-500">
                  {testomonial.companyAndPosition}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
