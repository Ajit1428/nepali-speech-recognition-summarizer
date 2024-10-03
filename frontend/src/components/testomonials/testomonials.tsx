import { testomonialList } from "$lib/utils/testimonials";
import { ITestomonials } from "$lib/utils/types";
import Image from "next/image";

export const Testomonials = () => {
  return (
    <main className="h-full flex flex-col justify-center items-center overflow-y-auto overflow-x-hidden px-8 py-12 gap-[5rem] lg:py-10 lg:px-[5rem] lg:overflow-hidden xl:px-[10rem] 2xl:px-[8rem]">
      <h1 className="font-bold text-[2rem] 2xl:text-[2.5rem]">Testomonials</h1>
      <div className="w-[22rem] md:w-[47rem] lg:w-[55rem] xl:w-[79rem] 2xl:w-[95rem]">
        <div className="grid gap-20 md:gap-8 md:grid-cols-2 lg:gap-12 xl:grid-cols-3 2xl:gap-14">
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
                className="absolute left-5 -top-1"
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
