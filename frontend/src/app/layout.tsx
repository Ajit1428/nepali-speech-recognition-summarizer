import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar/navbar";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nepali speech recognition and summarization",
  description:
    "An intuitive interface for converting Nepali speech to text and generating concise summaries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Toaster position="top-center" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
