import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StorEat.",
  description: "The most helpful thing for your kitchen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="rus">
      <body>{children}</body>
    </html>
  );
}
