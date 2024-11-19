"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function SummarizerComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<{
    transcript: string;
    summary: string;
  }>();

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const file = event?.target?.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("audio", file);
      const response = await axios.post(
        `${process.env.BACKEND_URI}/audio`,
        formData,
      );
      if (response) {
        setResponseData(response.data);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-[3rem] font-[800] capitalize text-blue-500">
          Summarize your audio files
        </h1>
        <span className="text-lg">
          Upload your audio file of any extension. e.g mp3, m4a, wav.
        </span>
      </div>
      <div className="flex h-[30rem] w-[80rem] flex-col items-center justify-center gap-6 bg-gray-200/40 p-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <div
              className="inline-block size-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-blue-500 motion-reduce:animate-[spin_1.5s_linear_infinite] "
              role="status"
            />
            <span className="font-semibold">
              Transcripting and summarizing your audio file, please wait...
            </span>
          </div>
        ) : responseData ? (
          <div className="flex flex-col items-start justify-start gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="w-fit border-b-4 border-double border-black text-xl font-bold">
                Transcript{" "}
              </h2>
              <span className="text-lg">{responseData?.transcript}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="w-fit border-b-4 border-double border-black text-xl font-bold">
                Summary
              </h2>
              <span className="text-lg">{responseData?.summary}</span>
            </div>
          </div>
        ) : (
          <>
            <div className="size-[60px]">
              <Image alt="audio" src="/audio.png" width="100" height="100" />
            </div>
            <label className="cursor-pointer rounded-sm border-2 bg-blue-500 px-[32px] py-[10px] text-[.9rem] font-semibold capitalize text-white transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-transparent hover:text-blue-500">
              Choose an audio file
              <input
                type="file"
                hidden
                onChange={(event) => handleFileUpload(event)}
              />
            </label>
          </>
        )}
      </div>
    </div>
  );
}
