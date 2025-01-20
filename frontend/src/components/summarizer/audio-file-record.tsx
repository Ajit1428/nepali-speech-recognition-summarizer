"use client";

import axios from "axios";
import { Mic, Save, Square } from "lucide-react";
import { ChangeEvent, MouseEvent } from "react";
import toast from "react-hot-toast";
import { ReactMediaRecorder } from "react-media-recorder";

interface IAudioFileRecord {
  handleRecordedFile: (
    event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    url: File | undefined,
  ) => void;
}

export const AudioFileRecord: React.FC<IAudioFileRecord> = ({
  handleRecordedFile,
}) => {
  const onChange = async (
    e: MouseEvent<HTMLButtonElement>,
    url: string | undefined,
  ) => {
    if (url) {
      const responseBlob = await axios(url, { responseType: "blob" });
      const blobToAudioFile = new File([responseBlob.data], "recorderd.wav");
      handleRecordedFile(e, blobToAudioFile);
    }
  };
  return (
    <div className="flex w-full items-center justify-center">
      <ReactMediaRecorder
        render={({
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
          clearBlobUrl,
        }) => (
          <div className="flex gap-10">
            {status === "recording" ? (
              <div className="place-items-center">
                <img
                  className="h-14 w-20"
                  src="./audio-wave.gif"
                  alt="audioWave"
                />
              </div>
            ) : (
              <audio src={mediaBlobUrl} controls />
            )}
            <div className="flex h-12 gap-1">
              <button
                onClick={() => {
                  toast.success("Recording started");
                  startRecording();
                  clearBlobUrl();
                }}
                className="rounded-lg border-2 bg-blue-500 px-4 py-1 text-white transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-transparent hover:text-blue-500"
              >
                <Mic className="size-5" />
              </button>
              <button
                onClick={() => {
                  stopRecording();
                  toast.error("Recording stopped");
                }}
                className="rounded-lg border-2 bg-red-600 px-4 py-1 text-white transition-all duration-300 ease-in-out hover:border-red-600 hover:bg-transparent hover:text-red-600"
              >
                <Square className="size-5" />
              </button>
              <button
                className="rounded-lg border-2 bg-green-600 px-4 py-1 text-white transition-all duration-300 ease-in-out hover:border-green-600 hover:bg-transparent hover:text-green-600"
                onClick={(e) => {
                  onChange(e, mediaBlobUrl);
                  toast.success("Recording saved");
                }}
              >
                <Save className="size-5" />
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};
