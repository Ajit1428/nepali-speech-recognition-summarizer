import { footerSocials } from "@/lib/footer-socials";

export const Footer = () => {
  return (
    <footer className="relative mt-16 flex flex-col items-center justify-center gap-8 bg-[#424b54] p-14 text-center text-white">
      <h2 className="text-[34px] font-bold">
        Nepali Speech Recognition and Summarizer
      </h2>
      <p className="text-wrap px-[35rem] leading-7">
        An intuitive interface for converting Nepali speech to text and
        generating concise summaries. The tool allows users to upload audio
        files or record live speech in Nepali, providing accurate transcription
        followed by a brief, easy-to-understand summary of the content
      </p>
      <div className="flex items-center gap-8 pb-8">
        {footerSocials.map((footer) => (
          <a
            target="_blank"
            href={footer.socialLink}
            key={footer.socialLink}
            className="cursor-pointer rounded-full border p-2 transition-all duration-300 ease-in-out hover:scale-125 hover:bg-[#B8D8D8] hover:text-black"
          >
            <footer.socialIcon className="size-6" />
          </a>
        ))}
      </div>
      <span className="absolute bottom-4">
        Copyright @2024 <span className="text-sky-400">Nepali Speech</span>. All
        rights reserved.
      </span>
    </footer>
  );
};
