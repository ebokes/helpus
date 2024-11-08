import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/session-wrapper";
import { Toaster } from "@/components/ui/toaster";
// import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Custom CSS variable for Montserrat
  weight: ["400", "500", "600", "700"], // Add more weights as needed
});

export const metadata: Metadata = {
  title: "HelpUs",
  description: "Help us Serve humanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={` ${montserrat.variable}  antialiased overflow-x-hidden`}
        >
          <Toaster />
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
