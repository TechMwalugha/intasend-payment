import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/shared/TopBar";


export const metadata: Metadata = {
  title: "Make Payment",
  description: "Send your payment now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#212634]`}
      >
        <TopBar />
        <main className="p-3">
        {children}
        </main>
      </body>
    </html>
  );
}
