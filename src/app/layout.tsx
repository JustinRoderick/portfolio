import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Roderick",
  description:
    "Justin Roderick is an aspiring software engineer and current student at the University of Central Florida.",
  keywords: [
    "Justin Roderick",
    "UCF",
    "Software Engineer",
    "Web Developer",
    "Developer",
    "Computer Science",
    "Engineer",
    "Justin",
    "Roderick",
    "University of Central Florida",
    "Software",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "flex min-h-full h-screen overflow-hidden flex-col bg-cover bg-blue-950 antialiased"
        }
      >
        {children}
      </body>
    </html>
  );
}
