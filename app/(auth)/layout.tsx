import type { Metadata } from "next";
import "../globals.css";


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
        className={`antialiased`}
      >
        <main className="p-3">
        {children}
        </main>
      </body>
    </html>
  );
}
