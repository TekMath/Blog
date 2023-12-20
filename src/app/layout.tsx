import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Math's blog",
  description: "Blog of Matheo Coquet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black bg-repeat">
      <body className="text-white">
        <Menu />
        {children}
      </body>
    </html>
  );
}
