import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={` ${montserrat.variable}  antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
