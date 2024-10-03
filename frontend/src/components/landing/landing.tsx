import Image from "next/image";

export const LandingPage = () => {
  return (
    <main className="h-full flex-col flex justify-center items-center overflow-y-auto overflow-x-hidden px-8 py-12 gap-[4rem] lg:flex-row lg:p-10 lg:gap-[5rem] lg:h-[calc(1040px-108px)] lg:overflow-hidden 2xl:gap-[8rem] ">
      <div className="flex flex-col items-start gap-6 lg:w-[40rem] 2xl:w-[50rem]">
        <h2 className="font-bold text-blue-500 text-[2rem] xl:text-[2.5rem] 2xl:text-[2.8rem]">
          Nepali speech recognition and summarizer
        </h2>
        <p className="xl:text-lg">
          An intuitive interface for converting Nepali speech to text and
          generating concise summaries. The tool allows users to upload audio
          files or record live speech in Nepali, providing accurate
          transcription followed by a brief, easy-to-understand summary of the
          content.
        </p>
        <button className="text-sm font-bold bg-transparent text-blue-500 border-2 border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-300 xl:text-[1.1rem]">
          Get Started
        </button>
      </div>
      <div className="max-w-[600px] w-full">
        <Image
          src="/landing.jpg"
          width="640"
          height="640"
          alt="landing-image"
          className="w-full h-full object-contain"
        />
      </div>
    </main>
  );
};
