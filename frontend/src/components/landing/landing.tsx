import Image from "next/image";

export const LandingPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-16 overflow-y-auto overflow-x-hidden px-8 py-12 lg:h-[calc(1040px-108px)] lg:flex-row lg:gap-20 lg:overflow-hidden lg:p-10 2xl:gap-32 ">
      <div className="flex flex-col items-start gap-6 lg:w-[40rem] 2xl:w-[50rem]">
        <h2 className="text-[2rem] font-bold text-blue-500 xl:text-[2.5rem] 2xl:text-[2.8rem]">
          Nepali Speech Recognition and Summarizer
        </h2>
        <p className="xl:text-lg">
          An intuitive interface for converting Nepali speech to text and
          generating concise summaries. The tool allows users to upload audio
          files or record live speech in Nepali, providing accurate
          transcription followed by a brief, easy-to-understand summary of the
          content.
        </p>
        <a
          href="/summarize"
          className="cursor-pointer rounded-lg border-2 border-blue-500 bg-transparent px-4 py-2 text-sm font-bold text-blue-500 transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white xl:text-[1.1rem]"
        >
          Get Started
        </a>
      </div>
      <div className="w-full max-w-[600px]">
        <Image
          src="/landing.jpg"
          width="640"
          height="640"
          alt="landing-image"
          className="size-full object-contain"
        />
      </div>
    </main>
  );
};
