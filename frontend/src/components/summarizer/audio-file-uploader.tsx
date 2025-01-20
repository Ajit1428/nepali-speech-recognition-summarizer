import Image from "next/image";
import { ChangeEvent } from "react";

export default function AudioFileUpload({
  handleFileUpload,
}: {
  handleFileUpload: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="size-[60px]">
        <Image alt="audio" src="/audio.png" width="100" height="100" />
      </div>
      <label className="cursor-pointer rounded-sm border-2 bg-blue-500 px-[32px] py-[10px] text-xs font-semibold capitalize text-white transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-transparent hover:text-blue-500 xl:text-[.9rem]">
        Choose an audio file
        <input
          type="file"
          hidden
          onChange={(event) => handleFileUpload(event)}
        />
      </label>
    </div>
  );
}
