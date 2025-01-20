"use client";

import React, { ChangeEvent, MouseEvent, useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils/cn";
import AudioFileUpload from "./audio-file-uploader";
import { AudioFileRecord } from "./audio-file-record";

export default function SummarizerComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toggleRecorder, setToggleRecorder] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<{
    transcript: string;
    summary: string;
  }>();

  const handleUploadFileCallback = async (
    event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    convertedFile: File | undefined,
  ) => {
    setIsLoading(true);
    const target = event?.target as HTMLInputElement;
    const file = target?.files && target.files[0];
    const formData: FormData = new FormData();
    if (file) {
      formData.append("audio", file);
    } else {
      formData.append("audio", convertedFile as Blob);
    }
    const response = await axios.post(
      `${process.env.BACKEND_URI}/audio`,
      formData,
    );
    if (response) {
      setResponseData(response.data);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-10 overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-[1.7rem] font-[800] capitalize text-blue-500 md:text-[2.5rem] xl:text-[3rem]">
          Summarize your audio files
        </h1>
        <span className="text-xs md:text-sm xl:text-[16px]">
          Upload your audio file of any extension. e.g mp3, m4a, wav.
        </span>
      </div>
      <div
        className={cn(
          "mb-4 flex h-[30rem] w-[25rem] flex-col items-center justify-center gap-6 bg-gray-200/40 p-4 md:mb-0 md:w-[45rem] lg:w-[60rem] xl:w-[80rem]",
          responseData && "h-auto",
        )}
      >
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <div
              className="inline-block size-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-blue-500 motion-reduce:animate-[spin_1.5s_linear_infinite] "
              role="status"
            />
            <span className="text-xs font-semibold md:text-sm">
              Transcripting and summarizing your audio file, please wait...
            </span>
          </div>
        ) : responseData ? (
          <div className="flex flex-col items-start justify-start gap-10 p-10">
            <div className="flex flex-col gap-4">
              <h1 className="w-fit border-b-4 border-double border-black text-xl font-bold">
                Transcript
              </h1>
              <span className="text-lg xl:text-xl">
                {responseData?.transcript}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="w-fit border-b-4 border-double border-black text-xl font-bold">
                Summary
              </h1>
              <span className="text-lg xl:text-xl">
                {responseData?.summary}
              </span>
            </div>
          </div>
        ) : toggleRecorder ? (
          <AudioFileRecord
            handleRecordedFile={(res, url) => {
              handleUploadFileCallback(res, url);
            }}
          />
        ) : (
          <AudioFileUpload
            handleFileUpload={(res: ChangeEvent<HTMLInputElement>) => {
              handleUploadFileCallback(res, undefined);
            }}
          />
        )}
        {!responseData && (
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">OR</span>
            <button
              onClick={() => {
                setToggleRecorder((value) => !value);
              }}
              className="text-[0.9rem] font-semibold text-blue-600 hover:cursor-pointer"
            >
              {toggleRecorder
                ? "Click here to upload an audio file"
                : "Click here to record an audio"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
