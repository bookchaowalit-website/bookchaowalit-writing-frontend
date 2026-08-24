import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Writing Desk | Bookchaowalit",
  description: "A static index of drafts and published notes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
